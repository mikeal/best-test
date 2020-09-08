#!/usr/bin/env node
import { spawnSync } from 'child_process'
import { readFileSync } from 'fs'

const exec = str => {
  const [cmd, ...args] = str.split(' ')
  return spawnSync(cmd, args, { stdio: 'inherit' })
}

const pkg = JSON.parse(readFileSync(process.cwd() + '/package.json'))
const version = process.version.slice(0, process.version.indexOf('.'))

const run = () => {
  if (pkg.scripts) {
    if (pkg.scripts['test:node-' + version]) {
      return exec('npm run test:node-' + version)
    }
  }
  return exec('npm test')
}

process.exit(run().status)
