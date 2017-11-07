//
//  ViewController.swift
//  Dynamo
//
//  Created by Jared Radtkey on 11/2/17.
//  Copyright © 2017 Jared Radtkey. All rights reserved.
//

import UIKit


class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    var cells = [String]()
    var subCells = [Int]()
    var input = ""

    @IBOutlet weak var taskTextField: UITextField!
    @IBOutlet weak var tableView: UITableView!
    
    @IBAction func beastButtonPressed(_ sender: UIButton) {
        insertNewTask()
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
        tableView.delegate = self
    }
    
    func insertNewTask(){
        input = taskTextField.text!
        let sub = 5 + Int(arc4random_uniform(UInt32(45 - 5 + 1)))
        cells.append(input)
        subCells.append(sub)
        
        let indexPath = IndexPath(row: cells.count-1, section: 0)
//        tableView.beginUpdates()
        tableView.insertRows(at: [indexPath], with: .automatic)
//        tableView.endUpdates()
        taskTextField.text = ""
        tableView.reloadData()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return cells.count
    }
    
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {

        let cell = tableView.dequeueReusableCell(withIdentifier: "My Cell", for: indexPath)
        cell.textLabel?.text = cells[indexPath.row]
        return cell
    }
    
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print("Section: \(indexPath.section) and Row: \(indexPath.row)")
        cells.remove(at: indexPath.row)
        tableView.reloadData()
    }
    
    
}



