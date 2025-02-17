#!/bin/sh

find ./ -maxdepth 1 -type f \( -iname "*.jpeg" -o -iname "*.png" \) | cut -c4- | while read FILE;
do
	echo "<img src=\"sources/images/$FILE\">"
done

