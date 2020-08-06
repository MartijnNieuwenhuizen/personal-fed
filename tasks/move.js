import { move as config } from '../config'
import { src, dest, watch, series } from 'gulp'
import { reload } from 'browser-sync'

export function move() {
  return src(config.src.move)
    .pipe(dest(config.dist.move))
    .pipe(reload({ stream: true }))
}

export function moveWatch() {
  watch(config.src.move, series(move))
}
