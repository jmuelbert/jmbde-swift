//
//  jmbdeApp.swift
//  jmbde
//
//  Created by Jürgen Mülbert on 04.11.23.
//

import SwiftUI
import SwiftData
import UniformTypeIdentifiers

@main
struct jmbdeApp: App {
    var body: some Scene {
        DocumentGroup(editing: .itemDocument, migrationPlan: jmbdeMigrationPlan.self) {
            ContentView()
        }
    }
}

extension UTType {
    static var itemDocument: UTType {
        UTType(importedAs: "com.example.item-document")
    }
}

struct jmbdeMigrationPlan: SchemaMigrationPlan {
    static var schemas: [VersionedSchema.Type] = [
        jmbdeVersionedSchema.self,
    ]

    static var stages: [MigrationStage] = [
        // Stages of migration between VersionedSchema, if required.
    ]
}

struct jmbdeVersionedSchema: VersionedSchema {
    static var versionIdentifier = Schema.Version(1, 0, 0)

    static var models: [any PersistentModel.Type] = [
        Item.self,
    ]
}
