//
//  ViewController.swift
//  NumGame
//
//  Created by Jared Radtkey on 11/1/17.
//  Copyright © 2017 Jared Radtkey. All rights reserved.
//

import UIKit

class ViewController: UIViewController {


    @IBOutlet weak var reset: UIButton!
    @IBOutlet weak var winnerLabel: UILabel!
    @IBOutlet weak var TOPLeft: UIButton!
    @IBOutlet weak var topMid: UIButton!
    @IBOutlet weak var topRight: UIButton!
    @IBOutlet weak var midLeft: UIButton!
    @IBOutlet weak var midMid: UIButton!
    @IBOutlet weak var midRight: UIButton!
    @IBOutlet weak var botLeft: UIButton!
    @IBOutlet weak var botMid: UIButton!
    @IBOutlet weak var botRight: UIButton!
    
    var game = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
    ]
    var buttonClicked = true
    
    @IBAction func reset(_ sender: UIButton) {
        game = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
        
        TOPLeft.backgroundColor = UIColor.black
        topMid.backgroundColor = UIColor.black
        topRight.backgroundColor = UIColor.black
        midLeft.backgroundColor = UIColor.black
        midMid.backgroundColor = UIColor.black
        midRight.backgroundColor = UIColor.black
        botLeft.backgroundColor = UIColor.black
        botMid.backgroundColor = UIColor.black
        botRight.backgroundColor = UIColor.black
        TOPLeft.setTitle("Click", for: .normal)
        topMid.setTitle("Click", for: .normal)
        topRight.setTitle("Click", for: .normal)
        midLeft.setTitle("Click", for: .normal)
        midMid.setTitle("Click", for: .normal)
        midRight.setTitle("Click", for: .normal)
        botLeft.setTitle("Click", for: .normal)
        botMid.setTitle("Click", for: .normal)
        botRight.setTitle("Click", for: .normal)
        
        
        buttonClicked = true
        winnerLabel.text = ""
        
    }
    func checkGame() {
        if (game[0][0] == 1 && game[0][1] == 1 && game[0][2] == 1){
            winnerLabel.text = "Player 1 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[0][0] == 2 && game[0][1] == 2 && game[0][2] == 2) {
            winnerLabel.text = "Player 2 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[1][0] == 1 && game[1][1] == 1 && game[1][2] == 1) {
            winnerLabel.text = "Player 1 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[1][0] == 2 && game[1][1] == 2 && game[1][2] == 2) {
            winnerLabel.text = "Player 2 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[2][0] == 1 && game[2][1] == 1 && game[2][2] == 1) {
            winnerLabel.text = "Player 1 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[2][0] == 2 && game[2][1] == 2 && game[2][2] == 2) {
            winnerLabel.text = "Player 2 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[0][0] == 1 && game[1][0] == 1 && game[2][0] == 1) {
            winnerLabel.text = "Player 1 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[0][0] == 2 && game[1][0] == 2 && game[2][0] == 2) {
            winnerLabel.text = "Player 2 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[0][1] == 1 && game[1][1] == 1 && game[2][1] == 1) {
            winnerLabel.text = "Player 1 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[0][1] == 2 && game[1][1] == 2 && game[2][1] == 2) {
            winnerLabel.text = "Player 2 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[0][2] == 1 && game[1][2] == 1 && game[2][2] == 1) {
            winnerLabel.text = "Player 1 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[0][2] == 2 && game[1][2] == 2 && game[2][2] == 2) {
            winnerLabel.text = "Player 2 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[0][0] == 1 && game[1][1] == 1 && game[2][2] == 1) {
            winnerLabel.text = "Player 1 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[0][0] == 2 && game[1][1] == 2 && game[2][2] == 2) {
            winnerLabel.text = "Player 2 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[0][2] == 1 && game[1][1] == 1 && game[2][0] == 1) {
            winnerLabel.text = "Player 1 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
        else if (game[0][2] == 2 && game[1][1] == 2 && game[2][0] == 2) {
            winnerLabel.text = "Player 2 wins"
            game = [
                [1,1,1],
                [1,1,1],
                [1,1,1]
            ]
        }
    }
    
    @IBAction func TOPLeft(_ sender: UIButton) {
        if game[0][0] == 0 && buttonClicked == true {
            TOPLeft.backgroundColor = UIColor.blue
            buttonClicked = false
            game[0][0] = 1
            TOPLeft.setTitle("", for: .normal)
            checkGame()
        }
        else if game[0][0] == 0 && buttonClicked == false{
            TOPLeft.backgroundColor = UIColor.red
            buttonClicked = true
            game[0][0] = 2
            TOPLeft.setTitle("", for: .normal)
            checkGame()
        }
        
    }
    
    @IBAction func topMid(_ sender: UIButton) {
        if game[0][1] == 0 && buttonClicked == true {
            topMid.backgroundColor = UIColor.blue
            buttonClicked = false
            game[0][1] = 1
            topMid.setTitle("", for: .normal)
            checkGame()
        }
        else if game[0][1] == 0 && buttonClicked == false{
            topMid.backgroundColor = UIColor.red
            buttonClicked = true
            game[0][1] = 2
            topMid.setTitle("", for: .normal)
            checkGame()
        }
    }
    
    @IBAction func topRight(_ sender: UIButton) {
        if game[0][2] == 0 && buttonClicked == true {
            topRight.backgroundColor = UIColor.blue
            buttonClicked = false
            game[0][2] = 1
            topRight.setTitle("", for: .normal)
            checkGame()
        }
        else if game[0][2] == 0 && buttonClicked == false{
            topRight.backgroundColor = UIColor.red
            buttonClicked = true
            game[0][2] = 2
            topRight.setTitle("", for: .normal)
            checkGame()
        }
    }
    
    @IBAction func midLeft(_ sender: UIButton) {
        if game[1][0] == 0 && buttonClicked == true {
            midLeft.backgroundColor = UIColor.blue
            buttonClicked = false
            game[1][0] = 1
            midLeft.setTitle("", for: .normal)
            checkGame()
        }
        else if game[1][0] == 0 && buttonClicked == false{
            midLeft.backgroundColor = UIColor.red
            buttonClicked = true
            game[1][0] = 2
            midLeft.setTitle("", for: .normal)
            checkGame()
        }
    }
    
    @IBAction func midMid(_ sender: UIButton) {
        if game[1][1] == 0 && buttonClicked == true {
            midMid.backgroundColor = UIColor.blue
            buttonClicked = false
            game[1][1] = 1
            midMid.setTitle("", for: .normal)
            checkGame()
        }
        else if game[1][1] == 0 && buttonClicked == false{
            midMid.backgroundColor = UIColor.red
            buttonClicked = true
            game[1][1] = 2
            midMid.setTitle("", for: .normal)
            checkGame()
        }
    }
    
    @IBAction func midRight(_ sender: UIButton) {
        if game[1][2] == 0 && buttonClicked == true {
            midRight.backgroundColor = UIColor.blue
            buttonClicked = false
            game[1][2] = 1
            midRight.setTitle("", for: .normal)
            checkGame()
        }
        else if game[1][2] == 0 && buttonClicked == false{
            midRight.backgroundColor = UIColor.red
            buttonClicked = true
            game[1][2] = 2
            midRight.setTitle("", for: .normal)
            checkGame()
        }
    }
    
    @IBAction func botLeft(_ sender: UIButton) {
        if game[2][0] == 0 && buttonClicked == true {
            botLeft.backgroundColor = UIColor.blue
            buttonClicked = false
            game[2][0] = 1
            botLeft.setTitle("", for: .normal)
            checkGame()
        }
        else if game[2][0] == 0 && buttonClicked == false{
            botLeft.backgroundColor = UIColor.red
            buttonClicked = true
            game[2][0] = 2
            botLeft.setTitle("", for: .normal)
            checkGame()
        }
    }
    
    @IBAction func botMid(_ sender: UIButton) {
        if game[2][1] == 0 && buttonClicked == true {
            botMid.backgroundColor = UIColor.blue
            buttonClicked = false
            game[2][1] = 1
            botMid.setTitle("", for: .normal)
            checkGame()
        }
        else if game[2][1] == 0 && buttonClicked == false{
            botMid.backgroundColor = UIColor.red
            buttonClicked = true
            game[2][1] = 2
            botMid.setTitle("", for: .normal)
            checkGame()
        }
    }
    
    @IBAction func botRight(_ sender: UIButton) {
        if game[2][2] == 0 && buttonClicked == true {
            botRight.backgroundColor = UIColor.blue
            buttonClicked = false
            game[2][2] = 1
            botRight.setTitle("", for: .normal)
            checkGame()
        }
        else if game[2][2] == 0 && buttonClicked == false{
            botRight.backgroundColor = UIColor.red
            buttonClicked = true
            game[2][2] = 2
            botRight.setTitle("", for: .normal)
            checkGame()
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

