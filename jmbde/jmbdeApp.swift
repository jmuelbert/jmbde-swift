//
//  jmbdeApp.swift
//  jmbde
//
//  Created by Jürgen Mülbert on 05.11.23.
//

import SwiftUI

@main
struct jmbdeApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
