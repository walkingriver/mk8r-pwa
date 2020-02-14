#!/bin/bash

###### 
# Make a bunch of iOS PWA splash screens from a Master image.
# Given an image at least 1920x1920 pixels named splash.png, resize and create a
# duplicate at each specified size. Add new sizes as needed. When finished,
# copy the resulting images into your Android project, under the res folder.

mkdir -p ./move-to-splash
function resize {
  w=$2
  h=$3

  $dw=$w
  $dh=$h
  $fn="splash{$dw}-${dh}.png"

  echo $1 at $4 x

  [ -d "./res/$4" ] || mkdir ./res/$4

  if [[ $w -ge $h ]]; then
    # Landscape
    echo "<link rel=\"apple-touch-icon\" media=\"screen and (device-width: {$dw}px) and (device-height: {$dh}px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"$fn\" />"
    sips -Z $w -c $h $w --out ./res/$4/splash.png $1
  else
    # Portrait
    sips -Z $h -c $h $w --out ./res/$4/splash.png $1
  fi
}

resize $1 320 480 1
resize $1 640 480 1
