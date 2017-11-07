//: Playground - noun: a place where people can play

import UIKit

struct Card {
    var Color: String
    var Roll: Int
}

class Deck {
    var cards: [Card] = []
    init(){
        for i in 0..<3{
            for j in 0..<10{
                
                if(i==0){
                    let card: Card = Card(Color: "Blue", Roll: Int(arc4random_uniform(UInt32(2)+1)))
                    cards.append(card)
                }
                
                else if(i==1){
                    let card: Card = Card(Color: "Red", Roll: Int(arc4random_uniform(UInt32(2)+3)))
                    cards.append(card)
                }
                else if(i==2){
                    let card: Card = Card(Color: "Green", Roll: Int(arc4random_uniform(UInt32(3)+4)))
                    cards.append(card)
                }
            }
        }
        self.shuffle()
    }
    func deal() -> Card {
        var top = self.cards.remove(at: 0)
        return top
    }
    func isEmpty() -> Bool {
        if (self.cards.count == 0){
            return true
        }
        else{
            return false
        }
    }
    func shuffle() -> Deck{
        for num in 0..<30{
            var temp = cards[num]
            var i = Int(arc4random_uniform(UInt32(30)))
            cards[num] = cards[i]
            cards[i] = temp
        }
        return self
    }
}

var deck = Deck()
print (deck.cards)

class Player {
    var name: String
    var hand: [Card] = []
    init(name: String){
        self.name = name
    }
    func draw(deck: Deck) -> Card {
        var newCard = deck.deal()
        self.hand.append(newCard)
        return newCard
    }

    func rollDice() -> Int {
        let rand = Int(arc4random_uniform(UInt32(6)))
        return rand
    }

    func matchingCards(color:String, roll:Int) -> Int {
        var count = 0
        for i in 0...self.hand.count-1 {
            if(self.hand[i].Roll == self.rollDice()){
                count = count + 1
            }
        }
        return count
    }
}


let player1 = Player(name: "Bob")
print(player1)


