module.exports = {
  git: {
    changelog: "npx auto-changelog --stdout -p --commit-limit false --unreleased --template https://raw.githubusercontent.com/release-it/release-it/master/templates/changelog-compact.hbs",
    requireCleanWorkingDir: true,
    requireBranch: false,
    requireUpstream: true,
    requireCommits: false,
    addUntrackedFiles: false,
    commit: true,
    commitMessage: 'Release ${version}',
    commitArgs: [],
    tag: true,
    tagName: 'v${version}',
    tagAnnotation: 'Release ${version}',
    tagArgs: [],
    push: true,
    pushRepo: 'git@github.com:s-oehding/web-vCard.git',
    pushArgs: [
      '--follow-tags'
    ]
  },
  npm: {
    publish: false,
    ignoreVersion: true,
    skipChecks: true
  },
  plugins: {},
  hooks: {
    'after:bump': "npx auto-changelog -p --commit-limit false https://raw.githubusercontent.com/release-it/release-it/master/templates/keepachangelog.hbs"
  }
}