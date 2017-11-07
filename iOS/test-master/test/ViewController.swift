//
//  ViewController.swift
//  test
//
//  Created by McCabe Tonna on 11/2/17.
//  Copyright © 2017 Wambl, LLC. All rights reserved.
//

import UIKit
import CoreMotion

class ViewController: UIViewController {
    
    var motionManager: CMMotionManager?
//    var timer = Timer()
    var isTimerRunning: Bool = false
    var seconds = 1
    var time = 0
    var maximum: Double = 1.5
    weak var timer: Timer?
    var startTime: Double = 0
    var elapsed: Double = 0
    var status: Bool = false
    var dummyTimer = Timer()
    
    @IBAction func startButtonPressed(_ sender: UIButton) {
//        start()
        print ("start button pressed")

    }
    
    
    
    func start(){
       
        elapsed = 0
        self.time = 0
        startTime = Date().timeIntervalSinceReferenceDate
        timer = Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true){
        timer in
        
        self.time += 1
        self.height.text = String(self.time)
        print(self.time)
            
        }
    }
    func stop(){
        elapsed = (Date().timeIntervalSinceReferenceDate - startTime)*10000
//        elapsed = round(Date().timeIntervalSinceReferenceDate - startTime)
        
        print ("elapsed",self.elapsed)
//        if (self.time > maximum){
//            maximum = self.time
//        }
        
//        print(maximum)
        
        timer?.invalidate()
        
       
    }
    
//    @IBAction func stopButtonPressed(_ sender: UIButton) {
////        isTimerRunning = false
//        stop()
//
//
//    }
    
    
    @IBOutlet weak var height: UILabel!
    
    @IBOutlet weak var max: UILabel!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        motionManager = CMMotionManager()
        
       
        
        
  
        
            
            
            
        var total : Double = 0
        if let manager = motionManager{
            print("we have motion manager")
            if manager.isDeviceMotionAvailable {
                print("we can detect motion")
                
                let myQ = OperationQueue()
          
                manager.deviceMotionUpdateInterval = 0.2
                manager.startDeviceMotionUpdates(to: myQ, withHandler: { (data: CMDeviceMotion?, error: Error? ) in
                    if let mydata = data {
//
//                        print ("x gravity:", abs(mydata.gravity.x))
//                          print ("y gravity:", abs(mydata.gravity.y))
//                          print ("z gravity:", abs(mydata.gravity.z))
//                        total = (abs(mydata.gravity.x) + abs(mydata.gravity.y) + abs(mydata.gravity.z))
                        total = abs(mydata.gravity.x) + abs(mydata.gravity.y) + abs(mydata.gravity.z)

                           print ("total: ",total)
                        if (total > 1.25){
                            self.start()
                            while (total > 1.25){
                            print("TIMING")
                            }
                         self.stop()
                            DispatchQueue.main.async{
                                self.height.text = String(self.elapsed)

                            }
                        }
                    }
                    if let myerror = error {
                        print("errors",myerror)
                        manager.stopDeviceMotionUpdates()
                    }
                })
                }
                else {
                print("cannot detect motion")
                }
        }

        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

