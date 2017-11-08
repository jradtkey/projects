//
//  ViewController.swift
//  Bucket List
//
//  Created by Jared Radtkey on 11/7/17.
//  Copyright © 2017 Jared Radtkey. All rights reserved.
//

import UIKit

class BucketListViewController: UITableViewController {

    
    var items = ["Go to the moon", "Eat cake out of a box", "Surf perfect Indo", "Smell like teen spirit"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
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
    
}

