//
//  ViewController.swift
//  practice
//
//  Created by Jared Radtkey on 11/8/17.
//  Copyright © 2017 Jared Radtkey. All rights reserved.
//

import UIKit

class BucketListViewController: UITableViewController, CancelButtonDelegate {

    var items = ["Go to the moon", "Play golf with Obama", "Pick mushrooms in Fresno", "Sleep"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("Loaded")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "ListItemCell", for: indexPath)
        cell.textLabel?.text = items[indexPath.row]
        return cell
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        let navigationController = segue.destination as! UINavigationController
        let addItemTableViewController = navigationController.topViewController as! AddItemTableViewController
        addItemTableViewController.delegate = self
    }
    
    func cancelButtonPressed(by controller: UIViewController) {
        print("I'm the hidden controller")
    }
    
}


