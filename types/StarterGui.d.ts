interface StarterGui extends BasePlayerGui {
	Rules: ScreenGui & {
		TextLabel: TextLabel & {
			TextButton: TextButton & {
				LocalScript: LocalScript;
			};
			TextLabel_Roundify_12px: ImageLabel;
			TextLabel: TextLabel;
		};
	};
	Teams: ScreenGui & {
		TextButton: TextButton & {
			LocalScript: LocalScript;
		};
		TextLabel: TextLabel & {
			TextLabel: TextLabel;
			TextLabel_Roundify_12px: ImageLabel;
		};
		Team1: Frame & {
			X: Frame & {
				TextButton: TextButton & {
					LocalScript: LocalScript;
				};
			};
		};
	};
	Extras: ScreenGui & {
		Extras1: Frame & {
			X: Frame & {
				TextButton: TextButton & {
					LocalScript: LocalScript;
				};
			};
			Removehats: Frame & {
				TextButton: TextButton & {
					["Hat Script"]: Script;
				};
			};
			Off: Frame & {
				TextButton: TextButton & {
					LocalScript: LocalScript;
				};
			};
			On: Frame & {
				TextButton: TextButton & {
					LocalScript: LocalScript;
				};
			};
			ImageButton: ImageButton & {
				TextLabel2: TextLabel;
				TextLabel: TextLabel;
				LocalScript: LocalScript;
				Sound: Sound;
				ImageLabel: ImageLabel;
			};
		};
	};
	Uniforms: ScreenGui & {
		TextButton: TextButton & {
			LocalScript: LocalScript;
		};
		Uniform: Frame & {
			Gear: Frame;
			Line: TextBox;
			GearButton: Frame & {
				TextButton: TextButton & {
					LocalScript: LocalScript;
				};
			};
			X: Frame & {
				TextButton: TextButton & {
					LocalScript: LocalScript;
				};
			};
			ClothesButton: Frame & {
				TextButton: TextButton & {
					LocalScript: LocalScript;
				};
			};
			Hats: Frame;
			HatsButton: Frame & {
				TextButton: TextButton & {
					LocalScript: LocalScript;
				};
			};
			Clothes: Frame;
		};
		TextLabel: TextLabel & {
			TextLabel: TextLabel;
			TextLabel_Roundify_12px: ImageLabel;
		};
	};
}
