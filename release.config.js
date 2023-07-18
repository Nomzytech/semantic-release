module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/Nomzytech/semantic-release",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/git',
        '@semantic-release/github']
    
}
