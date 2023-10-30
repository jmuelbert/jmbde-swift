# frozen_string_literal: true.

source 'https://rubygems.org'
# ruby '~> 2.5.1'

gem 'cocoapods'
gem 'cocoapods-check'
gem 'cocoapods-generate'
gem 'cocoapods-packager'      # Generate a framework or static library from a podspec. https://github.com/CocoaPods/cocoapods-packager
gem 'cocoapods-repo-update'   # Fixes issues with CI not updating specs

gem 'fastlane'
gem 'xcode-install'

group :documentation do
    gem 'jazzy'
end

group :test do
    gem 'git_diff_parser'
    gem 'xcpretty'

    gem 'danger'
    gem 'danger-auto_label'
    gem 'danger-swiftlint'

    # Danger plugin to validate the code coverage of the files changed
    #     - Gem:     danger-xcov
    #     - URL:     https://github.com/nakiostudio/danger-xcov
    gem 'danger-xcov'
  end

plugins_path = File.join(File.dirname(__FILE__), 'fastlane', 'Pluginfile')
eval_gemfile(plugins_path) if File.exist?(plugins_path)
