//
//  JMBeDataUITestsLaunchTests.swift
//  JMBeDataUITests
//
// SPDX-FileCopyrightText: Copyright (c) 2016-2023 Jürgen Mülbert. All rights reserved.
// SPDX-License-Identifier: EUPL-1.2
//
//  Created by Jürgen Mülbert on 11.11.23.
//

import XCTest

final class JMBeDataUITestsLaunchTests: XCTestCase {

  override class var runsForEachTargetApplicationUIConfiguration: Bool {
    true
  }

  override func setUpWithError() throws {
    continueAfterFailure = false
  }

  func testLaunch() throws {
    let app = XCUIApplication()
    app.launch()

    // Insert steps here to perform after app launch but before taking a screenshot,
    // such as logging into a test account or navigating somewhere in the app

    let attachment = XCTAttachment(screenshot: app.screenshot())
    attachment.name = "Launch Screen"
    attachment.lifetime = .keepAlways
    add(attachment)
  }
}
