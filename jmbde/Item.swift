//
//  Item.swift
//  jmbde
//
//  Created by Jürgen Mülbert on 04.11.23.
//

import Foundation
import SwiftData

@Model
final class Item {
    var timestamp: Date
    
    init(timestamp: Date) {
        self.timestamp = timestamp
    }
}
