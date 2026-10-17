Arch Linux Dotfiles

My personal Arch Linux desktop configuration built around BSPWM, SXHKD, Alacritty, and Fish.

Desktop Preview

!Desktop

Screenshots
Setup	Preview
Fastfetch	!Fastfetch
CAVA	!CAVA
Ranger	!Ranger
Environment
OS: Arch Linux
Window manager: BSPWM
Hotkeys: SXHKD
Terminal: Alacritty
Shell: Fish
Launcher: Rofi
Music visualizer: CAVA
File manager: Ranger
Terminal Tools
Command	Purpose
fastfetch	Displays system information
cava	Audio spectrum visualizer
cmatrix	Matrix-style terminal animation
btop	Interactive system monitor
ranger	Terminal file manager
chafa image.png	Renders an image in the terminal
ncmpcpp	Terminal music client for MPD
Installation

Install the required packages using pacman as appropriate for your setup.

sudo pacman -S --needed bspwm sxhkd alacritty fish rofi picom polybar scrot feh fastfetch cava ranger chafa cmatrix btop mpd mpc ncmpcpp


Back up existing configuration files before installing or linking these dotfiles. Review each configuration before applying it.

Screenshots

Screenshots are stored in the screenshots/ directory. They show the actual desktop and terminal applications.

Notes

These are personal configuration files. Adapt paths, package choices, keybindings, and display settings to your own system.
