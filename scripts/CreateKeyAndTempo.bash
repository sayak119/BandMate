#!/bin/bash

declare -a keys=("0" "1" "2" "3" "4" "5" "-6" "-5" "-4" "-3" "-2" "-1")
# Bb B C C# D Eb E F F# G G# A

declare -a tempos=("60" "80" "100" "120" "140" "160" "180" "200" "220")

for file in *.mid; do
	mp3FileName=""

	for tempo in "${tempos[@]}"; do
        for key in "${keys[@]}"; do
            mp3FileName=${file%.*}_"$tempo"_"$key".mp3

    		if [ -f "$mp3FileName" ]; then
     			echo "$mp3FileName already exists. Delete it if you want to make a new one";
     			break;
    		fi
		    echo "mp3filename = $mp3FileName";
		    echo "Creating mp3 with $file at $tempo bpm in key $key" &&
    	    timidity "$file" -T "$tempo" -K "$key" -Ow && ffmpeg -ss 0 -t 89 -i "${file%.*}".wav -codec:a libmp3lame -b:a 48k -ar 16000 "$mp3FileName" &&
    	    rm "${file%.*}".wav
        done
    done
done

