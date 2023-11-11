//
//  JMBeDataApp.swift
//  JMBeData
//
// SPDX-FileCopyrightText: Copyright (c) 2016-2023 Jürgen Mülbert. All rights reserved.
// SPDX-License-Identifier: EUPL-1.2
//
//  Created by Jürgen Mülbert on 11.11.23.
//

import SwiftUI

@main
struct JMBeDataApp: App {
  let persistenceController = PersistenceController.shared

  var body: some Scene {
    WindowGroup {
      ContentView()
        .environment(\.managedObjectContext, persistenceController.container.viewContext)
    }
  }
}
