//
//  ViewController.swift
//  RandomAges
//
//  Created by Jared Radtkey on 11/7/17.
//  Copyright © 2017 Jared Radtkey. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    let people = ["Willy", "Suzy", "Bret", "Jim", "Ophelia", "Chris", "Helga", "Abraham", "Wilfred", "Oprah", "Tim", "Fran"]
    
    override func viewDidLoad() {
        super.viewDidLoad()

    }



}

extension ViewController: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return people.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "PersonCell", for: indexPath)
        
        let age = arc4random_uniform(95-5) + 5
        cell.detailTextLabel?.text = "\(age) years old"
        
        cell.textLabel?.text = self.people[indexPath
        .row]
        return cell
    }
    
}
