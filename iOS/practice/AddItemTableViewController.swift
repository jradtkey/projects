//
//  AddItemTableViewController.swift
//  practice
//
//  Created by Jared Radtkey on 11/8/17.
//  Copyright © 2017 Jared Radtkey. All rights reserved.
//

import UIKit

class AddItemTableViewController: UITableViewController {

    weak var delegate: CancelButtonDelegate?
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButtonPressed(by: self)
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()


    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}
