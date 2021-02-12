interface ReplicatedStorage extends Instance {
	Modules: Folder & {
		module: ModuleScript;
		customise: ModuleScript;
	};
	Assets: Folder & {
		Covers: Folder & {
			German: Folder & {
				GermanCover: Model & {
					Union: UnionOperation;
					["Air Lugs"]: UnionOperation;
					Helmet: MeshPart;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Inside: MeshPart;
				};
				GermanGear: Model & {
					Hooks: UnionOperation;
					["Buckle Insignia"]: UnionOperation;
					Middle: Part;
					Buckle: UnionOperation;
					Belt: UnionOperation;
				};
			};
			Accessories: Folder & {
				MaleBlack: Model & {
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Hair: UnionOperation;
				};
				FemaleBrown: Model & {
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Hair: MeshPart;
				};
				FemaleBlack: Model & {
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Hair: MeshPart;
				};
				FemaleBlond: Model & {
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Hair: MeshPart;
				};
				MaleBlond: Model & {
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Hair: UnionOperation;
				};
				MaleBrown: Model & {
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Hair: UnionOperation;
				};
			};
			BasicTraining: Folder & {
				Helmet: Model & {
					Middle: Part & {
						Mesh: SpecialMesh;
					};
				};
				Webbing: Model & {
					["Smooth Block Model"]: Part & {
						Mesh: SpecialMesh;
					};
					Middle: Part;
				};
			};
			ArmyCovers: Folder & {
				ClassAGeneralGrade: Model & {
					["Chin Strap"]: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					MeshPart: MeshPart;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Handle: Part;
				};
				MPOfficerClassA: Model & {
					Union: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					["Chin Strap"]: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					MeshPart: MeshPart;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Handle: Part;
				};
				ClassBFieldGrade: Model & {
					["Chin Strap"]: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					MeshPart: MeshPart;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Handle: Part;
				};
				["3ACO"]: Model & {
					Middle: Part & {
						Mesh: SpecialMesh;
					};
				};
				EnlistedCrusherCap: Model & {
					Union: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					Handle: Part;
					["Chin Strap"]: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					MeshPart: MeshPart;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
				};
				ClassBGeneralGrade: Model & {
					["Chin Strap"]: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					MeshPart: MeshPart;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Handle: Part;
				};
				ClassACompanyGrade: Model & {
					Union: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					["Chin Strap"]: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					MeshPart: MeshPart;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Handle: Part;
				};
				Brodie: Model & {
					Middle: Part & {
						Mesh: SpecialMesh;
					};
				};
				["DPMG Brodie"]: Model & {
					P: UnionOperation;
					M: UnionOperation;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					w: Part;
				};
				["3AXO"]: Model & {
					Middle: Part & {
						Mesh: SpecialMesh;
					};
				};
				SNCOClassB: Model & {
					Union: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					Handle: Part;
					["Chin Strap"]: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					MeshPart: MeshPart;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
				};
				ClassAFieldGrade: Model & {
					["Chin Strap"]: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					MeshPart: MeshPart;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Handle: Part;
				};
				ClassBCompanyGrade: Model & {
					Union: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					["Chin Strap"]: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					MeshPart: MeshPart;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Handle: Part;
				};
				EnlistedClassB: Model & {
					Union: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					Handle: Part;
					["Chin Strap"]: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					MeshPart: MeshPart;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
				};
				MilitaryPoliceCombat: Model & {
					M: UnionOperation;
					P: UnionOperation;
					w: Part;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
				};
				MPOfficerClassB: Model & {
					Union: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					["Chin Strap"]: UnionOperation & {
						RelativeValue: CFrameValue;
					};
					MeshPart: MeshPart;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Handle: Part;
				};
				["PMG Brodie"]: Model & {
					P: UnionOperation;
					M: UnionOperation;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					w: Part;
				};
			};
			Insignias: Folder & {
				["60"]: Model;
				["70"]: Model;
				["85"]: UnionOperation;
				["75"]: UnionOperation;
				["65"]: Model;
				["55"]: Model;
				["80"]: Model;
				["90"]: MeshPart;
				["240"]: Model;
				["255"]: Model;
				["245"]: Model;
				["45"]: Part;
				["50"]: Part;
				["95"]: Model;
				["241"]: Model;
				["250"]: Model;
			};
			["3dGear"]: Folder & {
				MPArmBand: Model & {
					Union: UnionOperation;
					P: UnionOperation;
					Middle: Part;
					M: UnionOperation;
				};
			};
			ArmyGear: Folder & {
				EnlistedWebbings: Model & {
					["Bread bag strap buckle"]: UnionOperation;
					["Bread bag"]: UnionOperation;
					["Canteen body"]: UnionOperation & {
						Weld: Weld;
					};
					["Bread bag strap"]: UnionOperation;
					Braces: UnionOperation;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					["Lid cork"]: UnionOperation;
					["Mess tin"]: UnionOperation;
					["Coat roll straps"]: UnionOperation;
					["Canteen metal"]: UnionOperation & {
						Weld: Weld;
					};
					["Mess tin strap"]: UnionOperation;
					["Belt buckle"]: UnionOperation;
					["Coat roll buckle"]: UnionOperation;
					Union: UnionOperation;
					Belt: UnionOperation;
					["Mess tom buckle "]: UnionOperation;
				};
				GeneralGradeBeltA: Model & {
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					["Ammo Pouch"]: UnionOperation;
					Belt: UnionOperation;
					["Belt buckle"]: UnionOperation;
				};
				BasicWebbing: Model & {
					["Smooth Block Model"]: Part & {
						Mesh: SpecialMesh;
					};
					Middle: Part;
				};
				IDWebbingA: Model & {
					Scabbard: UnionOperation;
					MeshPart: MeshPart;
					["Scabbard Hook"]: UnionOperation;
					Middle: Part;
				};
				IDWebbingB: Model & {
					Strap: UnionOperation & {
						color: Decal;
					};
					Scabbard: UnionOperation;
					["Scabbard Hook"]: UnionOperation;
					Middle: Part;
					BayonetWood: UnionOperation;
				};
				GeneralGradeBeltB: Model & {
					Hammer: UnionOperation;
					Ray_Ignore: UnionOperation;
					Middle: Part & {
						Mesh: SpecialMesh;
					};
					Blade: MeshPart;
				};
				MpGear: Model & {
					["Smooth Block Model"]: Part & {
						Mesh: SpecialMesh;
					};
					Middle: Part;
				};
				OfficerGear: Model & {
					["Smooth Block Model"]: Part & {
						Mesh: SpecialMesh;
					};
					Middle: Part;
				};
			};
		};
		Weapons: Folder & {
			["Webley Mark IV"]: Tool & {
				Cylinder: UnionOperation;
				Front: UnionOperation;
				NoCol: ModuleScript & {
					equip: Animation & {
						KeyframeSequence: KeyframeSequence;
					};
					reload: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF3.6900001525879"]: Keyframe;
							["sfx/268870208"]: Keyframe & {
								Torso: Pose & {
									["grip.Webley"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/2155187656"]: Keyframe & {
								Torso: Pose & {
									["grip.Webley"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["KF3.5900001525879"]: Keyframe & {
								Torso: Pose & {
									["grip.Webley"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/268870256"]: Keyframe & {
								Torso: Pose & {
									["grip.Webley"]: Pose;
									["Left Arm"]: Pose;
								};
							};
						};
					};
					idle: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF4.5900001525879"]: Keyframe;
							["KF4.5899999523163"]: Keyframe;
							Keyframe: Keyframe & {
								HumanoidRootPart: Pose & {
									Torso: Pose & {
										["grip.Webley"]: Pose;
										Head: Pose;
										["Right Arm"]: Pose;
										["Left Arm"]: Pose;
									};
								};
							};
						};
					};
					holster: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF1.1490000486374"]: Keyframe;
							Keyframe: Keyframe & {
								HumanoidRootPart: Pose & {
									Torso: Pose & {
										["grip.Webley"]: Pose;
									};
								};
							};
						};
					};
				};
				gun_id: StringValue;
				GRIP: Part & {
					Handle: Attachment;
					Barrel: Attachment & {
						[".05"]: PointLight;
					};
				};
				Bolt: UnionOperation;
				Back: UnionOperation;
			};
			["Gewehr 98 Scoped"]: Tool & {
				Wood: MeshPart;
				NoCol: ModuleScript & {
					["bayonet.attack"]: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF0.4990000128746"]: Keyframe;
							["sfx/143501853"]: Keyframe & {
								Torso: Pose & {
									["grip.Scoped Kar98k"]: Pose;
								};
							};
							attack: Keyframe & {
								Torso: Pose & {
									["grip.Scoped Kar98k"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
						};
					};
					idle: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF0.85000002384186"]: Keyframe;
							["KF0.85"]: Keyframe;
							Keyframe: Keyframe & {
								HumanoidRootPart: Pose & {
									Torso: Pose & {
										["grip.Scoped Kar98k"]: Pose & {
											["Stripper Clip"]: Pose;
											Bullets: Pose;
										};
										Head: Pose;
										["Right Arm"]: Pose;
										["Left Arm"]: Pose;
									};
								};
							};
						};
					};
					["bayonet.toggle"]: Animation & {
						KeyframeSequence: KeyframeSequence & {
							toggle: Keyframe & {
								Torso: Pose & {
									["grip.Scoped Kar98k"]: Pose;
								};
							};
							["sfx/268870256"]: Keyframe & {
								Torso: Pose & {
									["grip.Scoped Kar98k"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
						};
					};
					equip: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF1.0980000495911"]: Keyframe;
						};
					};
					bolt: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["clip.in"]: Keyframe & {
								Torso: Pose & {
									["grip.Scoped Kar98k"]: Pose & {
										jj: Pose;
										Bullets: Pose;
										dd: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/287233160"]: Keyframe & {
								Torso: Pose & {
									["grip.Scoped Kar98k"]: Pose & {
										jj: Pose;
										dd: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/287233078"]: Keyframe & {
								Torso: Pose & {
									["grip.Scoped Kar98k"]: Pose & {
										Bullets: Pose;
									};
								};
							};
							["sfx/287233050"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Scoped Kar98k"]: Pose & {
										jj: Pose;
										dd: Pose;
									};
								};
							};
							["sfx/287233124"]: Keyframe & {
								Torso: Pose & {
									["Left Arm"]: Pose;
								};
							};
						};
					};
					reload: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["mag.in"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Scoped Kar98k"]: Pose & {
										dd: Pose;
									};
								};
							};
							["sfx/287233160"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Scoped Kar98k"]: Pose & {
										jj: Pose;
										dd: Pose;
									};
								};
							};
							["sfx/287233078"]: Keyframe & {
								Torso: Pose & {
									["grip.Scoped Kar98k"]: Pose & {
										jj: Pose;
									};
								};
							};
							["sfx/287233050"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Scoped Kar98k"]: Pose & {
										Bullets: Pose;
										["Stripper Clip"]: Pose;
										dd: Pose;
									};
								};
							};
							["clip.in"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Scoped Kar98k"]: Pose & {
										["Stripper Clip"]: Pose;
										Bullets: Pose;
									};
								};
							};
							["KF1.3990000486374"]: Keyframe & {
								Torso: Pose & {
									["grip.Scoped Kar98k"]: Pose & {
										Bullets: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/334570520"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Scoped Kar98k"]: Pose & {
										["Stripper Clip"]: Pose;
										Bullets: Pose;
									};
								};
							};
							no: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Scoped Kar98k"]: Pose & {
										jj: Pose;
										["Stripper Clip"]: Pose;
										dd: Pose;
									};
								};
							};
							["sfx/287233124"]: Keyframe & {
								Torso: Pose & {
									["grip.Scoped Kar98k"]: Pose & {
										jj: Pose;
										["Stripper Clip"]: Pose;
									};
								};
							};
						};
					};
					holster: Animation & {
						KeyframeSequence: KeyframeSequence & {
							Keyframe: Keyframe & {
								Torso: Pose & {
									["grip.Scoped Kar98k"]: Pose & {
										Bullets: Pose;
										Stock: Pose;
										["Stripper Clip"]: Pose;
									};
								};
							};
						};
					};
				};
				Bullets: UnionOperation;
				Buttplate: MeshPart;
				gun_id: StringValue;
				jj: MeshPart;
				GRIP: Part & {
					Handle: Attachment;
					Barrel: Attachment & {
						[".05"]: PointLight;
					};
				};
				TriggerHolder: MeshPart;
				Metal: MeshPart;
			};
			MG15: Tool & {
				Reciever: UnionOperation;
				Bolt: UnionOperation;
				Stock: UnionOperation;
				Sights: UnionOperation;
				Compensator: UnionOperation;
				GRIP: Part & {
					Handle: Attachment;
					Barrel: Attachment & {
						[".05"]: PointLight;
					};
				};
				Clips: UnionOperation;
				Barrel: UnionOperation;
				Shroud: UnionOperation;
				gun_id: StringValue;
				NoCol: ModuleScript & {
					idle: Animation & {
						KeyframeSequence: KeyframeSequence & {
							Keyframe: Keyframe & {
								HumanoidRootPart: Pose & {
									Torso: Pose & {
										["grip.Type99"]: Pose & {
											Union: Pose;
										};
										Head: Pose;
										["Right Arm"]: Pose;
										["Left Arm"]: Pose;
									};
								};
							};
						};
					};
					equip: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF0.85000002384186"]: Keyframe;
						};
					};
					bipod: Animation & {
						KeyframeSequence: KeyframeSequence & {
							toggle: Keyframe & {
								Torso: Pose & {
									["grip.Type99"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/287233078"]: Keyframe & {
								Torso: Pose & {
									["grip.Type99"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
						};
					};
					reload: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["mag.in"]: Keyframe & {
								Torso: Pose & {
									["grip.Type99"]: Pose & {
										Mag: Pose;
									};
									["Left Arm"]: Pose;
								};
							};
							["mag.out"]: Keyframe & {
								Torso: Pose & {
									["grip.Type99"]: Pose & {
										Mag: Pose;
									};
									["Left Arm"]: Pose;
								};
							};
							["KF3.2489999294281"]: Keyframe;
							["sfx/268870018"]: Keyframe & {
								Torso: Pose & {
									["grip.Type99"]: Pose & {
										Mag: Pose;
									};
									["Left Arm"]: Pose;
								};
							};
							["sfx/269079756"]: Keyframe & {
								Torso: Pose & {
									["Left Arm"]: Pose;
								};
							};
							["sfx/270374745"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
								};
							};
							["sfx/320861268"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Type99"]: Pose & {
										Bolt: Pose;
									};
								};
							};
							["KF3.2489998340607"]: Keyframe;
							["KF3.3489998340607"]: Keyframe;
							["KF1.2000000476837"]: Keyframe;
						};
					};
					holster: Animation & {
						KeyframeSequence: KeyframeSequence & {
							Keyframe: Keyframe & {
								Torso: Pose & {
									["grip.Type99"]: Pose & {
										Bolt: Pose;
									};
								};
							};
						};
					};
				};
				Fastener: UnionOperation;
				Secondary: UnionOperation;
			};
			["Mosin Nagant"]: Tool & {
				["bayonet.on"]: UnionOperation;
				NoCol: ModuleScript & {
					["bayonet.attack"]: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF0.4990000128746"]: Keyframe;
							["sfx/143501853"]: Keyframe & {
								Torso: Pose & {
									["grip.Mosin Nagant"]: Pose;
								};
							};
							attack: Keyframe & {
								Torso: Pose & {
									["grip.Mosin Nagant"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
						};
					};
					idle: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF0.85000002384186"]: Keyframe;
							["KF0.85"]: Keyframe;
							Keyframe: Keyframe & {
								HumanoidRootPart: Pose & {
									Torso: Pose & {
										["grip.Mosin Nagant"]: Pose & {
											["Stripper Clip"]: Pose;
											Bullets: Pose;
										};
										Head: Pose;
										["Right Arm"]: Pose;
										["Left Arm"]: Pose;
									};
								};
							};
						};
					};
					["bayonet.toggle"]: Animation & {
						KeyframeSequence: KeyframeSequence & {
							toggle: Keyframe & {
								Torso: Pose & {
									["grip.Mosin Nagant"]: Pose;
								};
							};
							["sfx/268870256"]: Keyframe & {
								Torso: Pose & {
									["grip.Mosin Nagant"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
						};
					};
					equip: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF1.0980000495911"]: Keyframe;
						};
					};
					bolt: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["clip.in"]: Keyframe & {
								Torso: Pose & {
									["grip.Mosin Nagant"]: Pose & {
										jj: Pose;
										Bullets: Pose;
										dd: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/287233160"]: Keyframe & {
								Torso: Pose & {
									["grip.Mosin Nagant"]: Pose & {
										jj: Pose;
										dd: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/287233078"]: Keyframe & {
								Torso: Pose & {
									["grip.Mosin Nagant"]: Pose & {
										Bullets: Pose;
									};
								};
							};
							["sfx/287233050"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Mosin Nagant"]: Pose & {
										jj: Pose;
										dd: Pose;
									};
								};
							};
							["sfx/287233124"]: Keyframe & {
								Torso: Pose & {
									["Left Arm"]: Pose;
								};
							};
						};
					};
					reload: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["mag.in"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Mosin Nagant"]: Pose & {
										dd: Pose;
									};
								};
							};
							["sfx/287233160"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Mosin Nagant"]: Pose & {
										jj: Pose;
										dd: Pose;
									};
								};
							};
							["sfx/287233078"]: Keyframe & {
								Torso: Pose & {
									["grip.Mosin Nagant"]: Pose & {
										jj: Pose;
									};
								};
							};
							["sfx/287233050"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Mosin Nagant"]: Pose & {
										Bullets: Pose;
										["Stripper Clip"]: Pose;
										dd: Pose;
									};
								};
							};
							["clip.in"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Mosin Nagant"]: Pose & {
										["Stripper Clip"]: Pose;
										Bullets: Pose;
									};
								};
							};
							["KF1.3990000486374"]: Keyframe & {
								Torso: Pose & {
									["grip.Mosin Nagant"]: Pose & {
										Bullets: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/334570520"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Mosin Nagant"]: Pose & {
										["Stripper Clip"]: Pose;
										Bullets: Pose;
									};
								};
							};
							no: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Mosin Nagant"]: Pose & {
										jj: Pose;
										["Stripper Clip"]: Pose;
										dd: Pose;
									};
								};
							};
							["sfx/287233124"]: Keyframe & {
								Torso: Pose & {
									["grip.Mosin Nagant"]: Pose & {
										jj: Pose;
										["Stripper Clip"]: Pose;
									};
								};
							};
						};
					};
					holster: Animation & {
						KeyframeSequence: KeyframeSequence & {
							Keyframe: Keyframe & {
								Torso: Pose & {
									["grip.Mosin Nagant"]: Pose & {
										Bullets: Pose;
										Stock: Pose;
										["Stripper Clip"]: Pose;
									};
								};
							};
						};
					};
				};
				jj: UnionOperation;
				GRIP: Part & {
					Handle: Attachment;
					Barrel: Attachment & {
						[".05"]: PointLight;
					};
				};
				Bullets: UnionOperation;
				gun_id: StringValue;
			};
			["M1903 Springfield"]: Tool & {
				B2: UnionOperation;
				Bullets: UnionOperation;
				NoCol: ModuleScript & {
					["bayonet.attack"]: Animation & {
						["Lee-Enfield Bayonet Attack"]: KeyframeSequence & {
							["KF0.4990000128746"]: Keyframe;
							["sfx/143501853"]: Keyframe & {
								Torso: Pose & {
									["grip.Lee-Enfield"]: Pose;
								};
							};
							attack: Keyframe & {
								Torso: Pose & {
									["grip.Lee-Enfield"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
						};
					};
					idle: Animation & {
						["Lee-Enfield Idle"]: KeyframeSequence & {
							["KF0.85000002384186"]: Keyframe;
							["KF0.85"]: Keyframe;
							Keyframe: Keyframe & {
								HumanoidRootPart: Pose & {
									Torso: Pose & {
										["grip.Lee-Enfield"]: Pose & {
											["Stripper Clip"]: Pose;
											Bullets: Pose;
										};
										Head: Pose;
										["Right Arm"]: Pose;
										["Left Arm"]: Pose;
									};
								};
							};
						};
					};
					["bayonet.toggle"]: Animation & {
						["Lee-Enfield Bayonet Equip"]: KeyframeSequence & {
							toggle: Keyframe & {
								Torso: Pose & {
									["grip.Lee-Enfield"]: Pose;
								};
							};
							["KF0.4990000128746"]: Keyframe;
							["sfx/268870256"]: Keyframe & {
								Torso: Pose & {
									["grip.Lee-Enfield"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
						};
					};
					equip: Animation & {
						["Lee-Enfield Equip"]: KeyframeSequence & {
							["KF1.0980000495911"]: Keyframe;
						};
					};
					bolt: Animation & {
						["Lee-Enfield Bolt Pull"]: KeyframeSequence & {
							["clip.in"]: Keyframe & {
								Torso: Pose & {
									["grip.Lee-Enfield"]: Pose & {
										jj: Pose;
										Bullets: Pose;
										dd: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/287233160"]: Keyframe & {
								Torso: Pose & {
									["grip.Lee-Enfield"]: Pose & {
										jj: Pose;
										dd: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/287233078"]: Keyframe & {
								Torso: Pose & {
									["grip.Lee-Enfield"]: Pose & {
										Bullets: Pose;
									};
								};
							};
							["sfx/287233050"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Lee-Enfield"]: Pose & {
										jj: Pose;
										dd: Pose;
									};
								};
							};
							["sfx/287233124"]: Keyframe & {
								Torso: Pose & {
									["Left Arm"]: Pose;
								};
							};
						};
					};
					reload: Animation & {
						["Lee-Enfield Reload"]: KeyframeSequence & {
							["mag.in"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Lee-Enfield"]: Pose & {
										dd: Pose;
									};
								};
							};
							["sfx/287233160"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Lee-Enfield"]: Pose & {
										jj: Pose;
										dd: Pose;
									};
								};
							};
							["sfx/287233078"]: Keyframe & {
								Torso: Pose & {
									["grip.Lee-Enfield"]: Pose & {
										jj: Pose;
									};
								};
							};
							["sfx/287233050"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Lee-Enfield"]: Pose & {
										Bullets: Pose;
										["Stripper Clip"]: Pose;
										dd: Pose;
									};
								};
							};
							["clip.in"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Lee-Enfield"]: Pose & {
										["Stripper Clip"]: Pose;
										Bullets: Pose;
									};
								};
							};
							["KF1.3990000486374"]: Keyframe & {
								Torso: Pose & {
									["grip.Lee-Enfield"]: Pose & {
										Bullets: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/334570520"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Lee-Enfield"]: Pose & {
										["Stripper Clip"]: Pose;
										Bullets: Pose;
									};
								};
							};
							no: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.Lee-Enfield"]: Pose & {
										jj: Pose;
										["Stripper Clip"]: Pose;
										dd: Pose;
									};
								};
							};
							["sfx/287233124"]: Keyframe & {
								Torso: Pose & {
									["grip.Lee-Enfield"]: Pose & {
										jj: Pose;
										["Stripper Clip"]: Pose;
									};
								};
							};
						};
					};
					holster: Animation & {
						["Lee-Enfield Holstered"]: KeyframeSequence & {
							Keyframe: Keyframe & {
								Torso: Pose & {
									["grip.Lee-Enfield"]: Pose & {
										Bullets: Pose;
										Stock: Pose;
										["Stripper Clip"]: Pose;
									};
								};
							};
						};
					};
				};
				Mag: UnionOperation;
				MeshPart: MeshPart;
				C1: UnionOperation;
				["Stripper Clip"]: UnionOperation;
				B1: UnionOperation;
				["bayonet.on"]: UnionOperation;
				GRIP: Part & {
					Handle: Attachment;
					Barrel: Attachment & {
						[".05"]: PointLight;
					};
				};
				gun_id: StringValue;
				jj: UnionOperation;
				A2: UnionOperation;
				A1: UnionOperation;
				B3: UnionOperation;
			};
			["M1911 Pistol"]: Tool & {
				NoCol: ModuleScript & {
					equip: Animation & {
						KeyframeSequence: KeyframeSequence;
					};
					reload: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["mag.in"]: Keyframe & {
								Torso: Pose & {
									["grip.M1911"]: Pose & {
										Mag: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["mag.out"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.M1911"]: Pose & {
										Mag: Pose;
									};
								};
							};
							["sfx/271098725"]: Keyframe & {
								Torso: Pose & {
									["grip.M1911"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/393678946"]: Keyframe & {
								Torso: Pose & {
									["grip.M1911"]: Pose & {
										Bolt: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/268870109"]: Keyframe & {
								Torso: Pose & {
									["grip.M1911"]: Pose;
								};
							};
							["sfx/265275744"]: Keyframe & {
								Torso: Pose & {
									["grip.M1911"]: Pose & {
										Mag: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
						};
					};
					idle: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF4.5899999523163"]: Keyframe;
							Keyframe: Keyframe & {
								HumanoidRootPart: Pose & {
									Torso: Pose & {
										Head: Pose;
										["grip.M1911"]: Pose;
										["Right Arm"]: Pose;
										["Left Arm"]: Pose;
									};
								};
							};
						};
					};
					holster: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF4.5899999523163"]: Keyframe;
							Keyframe: Keyframe & {
								Torso: Pose & {
									["grip.M1911"]: Pose;
								};
							};
						};
					};
				};
				Mag: UnionOperation;
				["Nails&GripSafety"]: UnionOperation;
				BottomFrame: UnionOperation;
				Hammer: UnionOperation;
				barrel: UnionOperation;
				RearSight: UnionOperation;
				gun_id: StringValue;
				Trigger: UnionOperation;
				GRIP: Part & {
					Handle: Attachment;
					Barrel: Attachment & {
						[".05"]: PointLight;
					};
				};
				WoodPanels: UnionOperation;
				Bolt: UnionOperation;
			};
			AccessPass: Tool & {
				Handle: Part & {
					Mesh: SpecialMesh;
				};
				Humanoid: Humanoid;
			};
			MP18: Tool & {
				NoCol: ModuleScript & {
					equip: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["KF0.54900002479553"]: Keyframe;
							KF1: Keyframe;
						};
					};
					reload: Animation & {
						KeyframeSequence: KeyframeSequence & {
							["mag.in"]: Keyframe & {
								Torso: Pose & {
									["grip.Type100"]: Pose & {
										Mag: Pose;
									};
									["Left Arm"]: Pose;
								};
							};
							["mag.out"]: Keyframe & {
								Torso: Pose & {
									["grip.Type100"]: Pose & {
										Mag: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/271098725"]: Keyframe & {
								Torso: Pose & {
									["grip.Type100"]: Pose & {
										Bolt: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/269079756"]: Keyframe & {
								HumanoidRootPart: Pose & {
									Torso: Pose & {
										["grip.Type100"]: Pose & {
											Bolt: Pose;
										};
										Head: Pose;
									};
								};
							};
							["KF1.9000000476837"]: Keyframe;
							["sfx/270374761"]: Keyframe & {
								Torso: Pose & {
									["grip.Type100"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/269079412"]: Keyframe & {
								Torso: Pose & {
									["grip.Type100"]: Pose & {
										Mag: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
						};
					};
					idle: Animation & {
						KeyframeSequence: KeyframeSequence & {
							KF1: Keyframe;
							Keyframe: Keyframe & {
								HumanoidRootPart: Pose & {
									Torso: Pose & {
										Head: Pose;
										["grip.Type100"]: Pose & {
											Bolt: Pose;
										};
										["Right Arm"]: Pose;
										["Left Arm"]: Pose;
									};
								};
							};
						};
					};
					holster: Animation & {
						KeyframeSequence: KeyframeSequence & {
							KF1: Keyframe;
							Keyframe: Keyframe & {
								Torso: Pose & {
									["grip.Type100"]: Pose;
								};
							};
						};
					};
				};
				Trigger: UnionOperation;
				["Trigger Guard"]: UnionOperation;
				Union: UnionOperation;
				gun_id: StringValue;
				Casingg: UnionOperation & {
					Eject: Sound;
				};
				GRIP: Part & {
					Handle: Attachment;
					Barrel: Attachment & {
						[".05"]: PointLight;
					};
				};
				Mag: UnionOperation & {
					Eject: Sound;
					Insert: Sound;
				};
				Bolt: UnionOperation;
			};
			Luger: Tool & {
				NoCol: ModuleScript & {
					equip: Animation & {
						Test: KeyframeSequence;
					};
					reload: Animation & {
						Test: KeyframeSequence & {
							["mag.in"]: Keyframe & {
								Torso: Pose & {
									["grip.P38"]: Pose & {
										Mag: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["mag.out"]: Keyframe & {
								Torso: Pose & {
									["Right Arm"]: Pose;
									["grip.P38"]: Pose & {
										Mag: Pose;
									};
								};
							};
							["sfx/271098725"]: Keyframe & {
								Torso: Pose & {
									["grip.P38"]: Pose;
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/393678946"]: Keyframe & {
								Torso: Pose & {
									["grip.P38"]: Pose & {
										Bolt: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
							["sfx/268870109"]: Keyframe & {
								Torso: Pose & {
									["grip.P38"]: Pose;
								};
							};
							["sfx/265275744"]: Keyframe & {
								Torso: Pose & {
									["grip.P38"]: Pose & {
										Mag: Pose;
									};
									["Right Arm"]: Pose;
									["Left Arm"]: Pose;
								};
							};
						};
					};
					idle: Animation & {
						Test: KeyframeSequence & {
							["KF4.5899999523163"]: Keyframe;
							Keyframe: Keyframe & {
								HumanoidRootPart: Pose & {
									Torso: Pose & {
										["grip.P38"]: Pose;
										Head: Pose;
										["Right Arm"]: Pose;
										["Left Arm"]: Pose;
									};
								};
							};
						};
					};
					holster: Animation & {
						Test: KeyframeSequence & {
							["KF4.5899999523163"]: Keyframe;
							Keyframe: Keyframe & {
								Torso: Pose & {
									["grip.P38"]: Pose;
								};
							};
						};
					};
				};
				Mag: MeshPart & {
					Eject: Sound;
					Insert: Sound;
				};
				Trigger: MeshPart;
				["Link 2 LinkRotation"]: MeshPart;
				["Toggle1 BoltRotation"]: MeshPart;
				gun_id: StringValue;
				Casingg: UnionOperation & {
					Eject: Sound;
				};
				Frame: MeshPart;
				GRIP: Part & {
					Handle: Attachment;
					Barrel: Attachment & {
						[".05"]: PointLight;
					};
				};
				["Link1 FrizzenRotation"]: MeshPart;
			};
		};
		["GUI Assets"]: Folder & {
			GridIcon: ViewportFrame & {
				LocalScript: LocalScript;
				UIAspectRatioConstraint: UIAspectRatioConstraint;
				Hum: Model & {
					LeftLowerArm: MeshPart & {
						LeftElbowRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						LeftElbow: Motor6D;
						OriginalSize: Vector3Value;
						LeftWristRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
					};
					LeftFoot: MeshPart & {
						OriginalSize: Vector3Value;
						LeftAnkleRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						LeftAnkle: Motor6D;
					};
					RightHand: MeshPart & {
						RightWristRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						RightWrist: Motor6D;
						RightGripAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						OriginalSize: Vector3Value;
					};
					HumanoidRootPart: Part & {
						RootRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						OriginalSize: Vector3Value;
					};
					RightLowerLeg: MeshPart & {
						RightKneeRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						RightAnkleRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						RightKnee: Motor6D;
						OriginalSize: Vector3Value;
					};
					LeftUpperLeg: MeshPart & {
						OriginalSize: Vector3Value;
						LeftHip: Motor6D;
						LeftHipRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						LeftKneeRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
					};
					LeftLowerLeg: MeshPart & {
						OriginalSize: Vector3Value;
						LeftKnee: Motor6D;
						LeftAnkleRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						LeftKneeRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
					};
					LowerTorso: MeshPart & {
						WaistCenterAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						LeftHipRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						Root: Motor6D;
						RootRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						RightHipRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						OriginalSize: Vector3Value;
						WaistRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						WaistBackAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						WaistFrontAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
					};
					Head: Part & {
						HatAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						OriginalSize: Vector3Value;
						NeckRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						FaceFrontAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						HairAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						Neck: Motor6D;
						Mesh: SpecialMesh & {
							OriginalSize: Vector3Value;
						};
						FaceCenterAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
					};
					UpperTorso: MeshPart & {
						RightCollarAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						BodyBackAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						NeckRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						LeftCollarAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						OriginalSize: Vector3Value;
						Waist: Motor6D;
						RightShoulderRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						BodyFrontAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						WaistRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						LeftShoulderRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						NeckAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
					};
					LeftUpperArm: MeshPart & {
						LeftShoulderRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						LeftShoulder: Motor6D;
						LeftShoulderAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						LeftElbowRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						OriginalSize: Vector3Value;
					};
					RightLowerArm: MeshPart & {
						RightWristRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						OriginalSize: Vector3Value;
						RightElbow: Motor6D;
						RightElbowRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
					};
					LeftHand: MeshPart & {
						LeftWrist: Motor6D;
						LeftGripAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						OriginalSize: Vector3Value;
						LeftWristRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
					};
					Humanoid: Humanoid;
					RightUpperArm: MeshPart & {
						OriginalSize: Vector3Value;
						RightElbowRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						RightShoulderRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						RightShoulderAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						RightShoulder: Motor6D;
					};
					RightUpperLeg: MeshPart & {
						RightKneeRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						OriginalSize: Vector3Value;
						RightHip: Motor6D;
						RightHipRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
					};
					RightFoot: MeshPart & {
						RightAnkleRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						RightAnkle: Motor6D;
						OriginalSize: Vector3Value;
					};
				};
			};
			BasicModule: TextButton & {
				ViewportFrame: ViewportFrame & {
					LocalScript: LocalScript;
					Hum: Model & {
						["Left Leg"]: Part;
						Humanoid: Humanoid;
						["Right Leg"]: Part;
						Head: Part & {
							Mesh: SpecialMesh;
						};
						Torso: Part & {
							["Left Shoulder"]: Motor6D;
							["Right Shoulder"]: Motor6D;
							Neck: Motor6D;
							["Right Hip"]: Motor6D;
							["Left Hip"]: Motor6D;
						};
						HumanoidRootPart: Part & {
							["Root Hip"]: Motor6D;
						};
						["Right Arm"]: Part;
						["Left Arm"]: Part;
						Pants: Pants;
						Shirt: Shirt;
					};
					Head: BoolValue;
				};
				TextLabel: TextLabel;
			};
			Nametag: BillboardGui & {
				MainFrame: Frame & {
					PlrDivison: TextLabel;
					PlrRank: TextLabel;
					PlrName: TextLabel;
				};
			};
		};
	};
	Events: Folder & {
		PurchaseGamepass: RemoteEvent;
		Uniform: RemoteEvent;
		ChangeTeam: RemoteEvent;
	};
	CIC: Model & {
		Middle: Part & {
			Mesh: SpecialMesh;
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			services: ModuleScript;
			["compiler-types"]: Folder & {
				types: Folder;
			};
			types: Folder & {
				include: Folder & {
					generated: Folder;
				};
			};
		};
	};
}
