interface StarterPlayer extends Instance {
	StarterCharacterScripts: StarterCharacterScripts;
	StarterPlayerScripts: StarterPlayerScripts & {
		Client: Folder & {
			main: LocalScript;
		};
	};
}
