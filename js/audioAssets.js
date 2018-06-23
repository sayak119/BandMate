'use strict';

var audioData = [
	{
        'name' : 'A major',
        'tempos' : 
        [
        	{ 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_60_-1.mp3' },
        	{ 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_80_-1.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_100_-1.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_120_-1.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_140_-1.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_160_-1.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_180_-1.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_200_-1.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_220_-1.mp3' }
        ]
    },
    {
        'name' : 'B major',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_60_1.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_80_1.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_100_1.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_120_1.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_140_1.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_160_1.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_180_1.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_200_1.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_220_1.mp3' }
        ]
    },
    {
        'name' : 'C major',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_60_2.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_80_2.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_100_2.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_120_2.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_140_2.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_160_2.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_180_2.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_200_2.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_220_2.mp3' }
        ]
    },
    {
        'name' : 'D major',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_60_4.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_80_4.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_100_4.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_120_4.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_140_4.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_160_4.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_180_4.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_200_4.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_220_4.mp3' }
        ]
    },
    {
        'name' : 'E major',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_60_-6.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_80_-6.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_100_-6.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_120_-6.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_140_-6.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_160_-6.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_180_-6.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_200_-6.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_220_-6.mp3' }
        ]
    },
    {
        'name' : 'F major',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_60_-5.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_80_-5.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_100_-5.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_120_-5.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_140_-5.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_160_-5.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_180_-5.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_200_-5.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_220_-5.mp3' }
        ]
    },
    {
        'name' : 'G major',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_60_-3.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_80_-3.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_100_-3.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_120_-3.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_140_-3.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_160_-3.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_180_-3.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_200_-3.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_220_-3.mp3' }
        ]
    },
    {
        'name' : 'Rock drums',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/RockDrums_60.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/RockDrums_80.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/RockDrums_100.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/RockDrums_120.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/RockDrums_140.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/RockDrums_160.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/RockDrums_180.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/RockDrums_200.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/RockDrums_220.mp3' }
        ]
    },
        {
        'name' : 'A flat major',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_60_-2.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_80_-2.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_100_-2.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_120_-2.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_140_-2.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_160_-2.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_180_-2.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_200_-2.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_220_-2.mp3' }
        ]
    },
    {
        'name' : 'B flat major',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_60_0.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_80_0.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_100_0.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_120_0.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_140_0.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_160_0.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_180_0.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_200_0.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_220_0.mp3' }
        ]
    },
    {
        'name' : 'D flat major',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_60_3.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_80_3.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_100_3.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_120_3.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_140_3.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_160_3.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_180_3.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_200_3.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_220_3.mp3' }
        ]
    },
    {
        'name' : 'E flat major',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_60_5.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_80_5.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_100_5.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_120_5.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_140_5.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_160_5.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_180_5.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_200_5.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_220_5.mp3' }
        ]
    },
    {
        'name' : 'G flat major',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_60_-4.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_80_-4.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_100_-4.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_120_-4.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_140_-4.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_160_-4.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_180_-4.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_200_-4.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/bbBlues_220_-4.mp3' }
        ]
    },
    {
        'name' : 'a metronome',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/click_60.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/click_80.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/click_100.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/click_120.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/click_140.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/click_160.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/click_180.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/click_200.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/click_220.mp3' }
        ]
    },
    {
        'name' : 'I Wish, by Stevie Wonder',
        'tempos' : 
        [
            { 'name' : '60 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/IWish_100_0.mp3' },
            { 'name' : '80 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/IWish_100_0.mp3' },
            { 'name' : '100 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/IWish_100_0.mp3' },
            { 'name' : '120 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/IWish_100_0.mp3' },
            { 'name' : '140 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/IWish_100_0.mp3' },
            { 'name' : '160 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/IWish_100_0.mp3' },
            { 'name' : '180 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/IWish_100_0.mp3' },
            { 'name' : '200 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/IWish_100_0.mp3' },
            { 'name' : '220 beats per minute', 'file' : 'https://www.cs.drexel.edu/~dmp359/Tracks/IWish_100_0.mp3' }
        ]
    }
];

module.exports = audioData;
