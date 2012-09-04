function udlr(e){
	// Function to handle up, down, left, right movement, including wasd
			switch (e.keyCode){
				// Handle WASD
				case 68:
					nkey = 39;
					break;
				case 83:
					nkey = 40;
					break;
				case 65:
					nkey = 37;
					break;
				case 87:
					nkey = 38;
					break;
				default:
					nkey = e.keyCode;
			}
			e.preventDefault(); // Prevent page from moving etc
			switch (nkey){
				case 39:
					player.changeDir(0);
					e.preventDefault(); // Stop page from moving
					break;
				case 40:
					player.changeDir(1);
					e.preventDefault(); // Stop page from moving
					break;
				case 37:
					player.changeDir(2)
					e.preventDefault(); // Stop page from moving
					break;
				case 38:
					player.changeDir(3);
					e.preventDefault(); // Stop page from moving
					break;
			}
		};

