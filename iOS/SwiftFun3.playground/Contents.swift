//: Playground - noun: a place where people can play

import UIKit

var Oneto255: [Int] = []

for i in 1...255 {
    Oneto255.append(i)
}

for _ in 1...100 {
    let rand1 = Int(arc4random_uniform(UInt32(Oneto255.count)))
    let rand2 = Int(arc4random_uniform(UInt32(Oneto255.count)))
    Oneto255.swapAt(rand1,rand2)
}

var count = 0
var index = 0
for num in Oneto255 {
    if (num == 42){
        print (count)
        index = count
    }
    count = count + 1
}

Oneto255.remove(at: index)
print(Oneto255.count)
print("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index \(index)")

