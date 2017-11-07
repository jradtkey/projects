//: Playground - noun: a place where people can play

import UIKit


func tossCoin() -> String {
    print("Tossing a coin!")
    let rand = Int(arc4random_uniform(UInt32(2)))
    if rand == 1 {
        return "Heads"
    }
    else {
        return "Tails"
    }
}

func tossMultipleCoins(c: Int) -> Double{
    var heads = 0
    var tails = 0
    for _ in 0...c{
        if tossCoin() == "Tails" {
            tails += 1
        }
        else {
            heads += 1
        }
    }
    return Double(c) / Double (heads)
}

print (tossMultipleCoins(c: 10))
