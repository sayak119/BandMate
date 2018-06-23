#!/bin/bash

for file in *.mid; do
	tempo="60"
	mp3FileName=""

	for i in `seq 1 10`; do
		mp3FileName="${file%.*}"_$tempo.mp3
		if [ -f "$mp3FileName" ]; then
 			echo "$mp3FileName already exists. Delete it if you want to make a new one";
 			break;
		fi
		echo "mp3filename = $mp3FileName";
		echo "Creating mp3 with $file at $tempo bpm" &&
    	timidity "$file" -T "$tempo" -Ow && ffmpeg -ss 0 -t 89 -i "${file%.*}".wav -codec:a libmp3lame -b:a 48k -ar 16000 "$mp3FileName" &&
    	rm "${file%.*}".wav
    	tempo=$((tempo+20))
    done
done

