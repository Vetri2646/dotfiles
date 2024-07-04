#!/usr/bin/bash

send_notif(){
	dunstctl close-all

	brightness=$(light -G | awk '{print int($1+0.5)}')
	notify-send "Brightness: $brightness%" -t 1000
}

# Execute accordingly
case "$1" in
	"--inc")
		brightnessctl set +5%
		;;
	"--dec")
                brightnessctl set 5%-
		;;
	*)
		send_notif
		;;
esac

send_notif
