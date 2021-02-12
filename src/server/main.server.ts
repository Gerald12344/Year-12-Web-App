import { Teams, ReplicatedStorage, Players, MarketplaceService } from '@rbxts/services'
import { Weldpart } from './dist/weld'
import { teamPlayer } from './dist/team'

let USM  = 5538710

let gamepasses = [
    {id:14541167, tool:ReplicatedStorage.Assets.Weapons.AccessPass},          // Access pass
    {id:14692681, tool:ReplicatedStorage.Assets.Weapons.MG15},                // MG15 MACHINE GUN
    {id:14692708, tool:ReplicatedStorage.Assets.Weapons['Gewehr 98 Scoped']}, // Gewehr 98 Scoped SNIPER RIFLE
    {id:14692766, tool:ReplicatedStorage.Assets.Weapons.MP18},                // MP18 SMG
    {id:14693411, tool:ReplicatedStorage.Assets.Weapons['Mosin Nagant']},     // Mosin Nagant RIFLE
    {id:14693452, tool:ReplicatedStorage.Assets.Weapons.Luger},               // Luger PISTOL
    {id:14693590, tool:ReplicatedStorage.Assets.Weapons.Luger},               // Webley PISTOL
]

ReplicatedStorage.Events.ChangeTeam.OnServerEvent.Connect((plr:Player,teamName:unknown) => {
    if(plr.Team?.Name === teamName){ return }

    let Civilian = Teams.FindFirstChild("Civilian")
    let Hostile = Teams.FindFirstChild("Raiders")
    let Basic = Teams.FindFirstChild("Basic  Training")

    if(Civilian && Civilian.IsA("Team")){
        if(Hostile && Hostile.IsA("Team") && Basic && Basic.IsA("Team")){
            if(typeIs(teamName, "string")){
                print("got here")
                let rank = plr.GetRankInGroup(USM)
                    if(teamName === "Civilian"){
                        plr.Team = Civilian
                        plr.LoadCharacter()
                    }else if(teamName === "Raiders"){
                        if(rank === 0){
                            plr.Team = Hostile
                            plr.LoadCharacter()
                        }
                    }
                    else if(teamName === "Military"){
                        teamPlayer(plr, USM)
                        plr.LoadCharacter()
                    }
            }
        }
    }
})

Players.PlayerAdded.Connect((plr:Player):void => {
    teamPlayer(plr, USM)

    plr.CharacterAdded.Connect((character) => {
        plr.Character?.WaitForChild("Humanoid")


        if(plr.Team === Teams?.FindFirstChild("Raiders")){
            let hum = plr.Character?.FindFirstChild("Humanoid")
            wait(0.2)
            if(hum && hum.IsA("Humanoid")){
                hum.RemoveAccessories()
            }

            let GermanShirt = "1081143175"
            let GermanPants = "1081145959"
            let pants = character.FindFirstChildOfClass("Pants")
            if(pants && pants.IsA("Pants")){
                pants.PantsTemplate = 'rbxassetid://'+GermanPants
            }else{
                pants = new Instance('Pants', character)
                pants.PantsTemplate = 'rbxassetid://'+GermanPants
            }
            let shirt = character.FindFirstChildOfClass("Shirt")
            if(shirt && shirt.IsA("Shirt")){
                shirt.ShirtTemplate = 'rbxassetid://'+GermanShirt
            }else{
                shirt = new Instance('Shirt', character)
                shirt.ShirtTemplate = 'rbxassetid://'+GermanShirt
            }
            Weldpart(plr, ReplicatedStorage.Assets.Covers.German.GermanCover, "Head", "Cover") 
            Weldpart(plr, ReplicatedStorage.Assets.Covers.German.GermanGear, "Torso", "Gear") 
            wait(0.5)
            if(hum && hum.IsA("Humanoid")){
                hum.RemoveAccessories()
            }
        }
        if(plr.Team === Teams?.FindFirstChild("Basic  Training")){
            let hum = plr.Character?.FindFirstChild("Humanoid")
            wait(0.2)
            if(hum && hum.IsA("Humanoid")){
                hum.RemoveAccessories()
            }
            let Shirt = "4632279194"
            let Pants = "4632281273"
            let pants = character.FindFirstChildOfClass("Pants")
            if(pants && pants.IsA("Pants")){
                pants.PantsTemplate = 'rbxassetid://'+Pants
            }else{
                pants = new Instance('Pants', character)
                pants.PantsTemplate = 'rbxassetid://'+Pants
            }
            let shirt = character.FindFirstChildOfClass("Shirt")
            if(shirt && shirt.IsA("Shirt")){
                shirt.ShirtTemplate = 'rbxassetid://'+Shirt
            }else{
                shirt = new Instance('Shirt', character)
                shirt.ShirtTemplate = 'rbxassetid://'+Shirt
            }
            Weldpart(plr, ReplicatedStorage.Assets.Covers.BasicTraining.Helmet, "Head", "Cover") 
            Weldpart(plr, ReplicatedStorage.Assets.Covers.BasicTraining.Webbing, "Torso", "Gear")
            wait(0.5)
            if(hum && hum.IsA("Humanoid")){
                hum.RemoveAccessories()
            } 
        }
    });
})

ReplicatedStorage.Events.PurchaseGamepass.OnServerEvent.Connect((plr:Player, id):void => {
    if(typeIs(id, "number")){
        let Object = gamepasses[id]
        if(Object){
            let PassOwned
            let hasPass = pcall(() => {
                PassOwned = MarketplaceService.UserOwnsGamePassAsync(plr.UserId, Object.id)
            }) 
            if(PassOwned === false) { 
                MarketplaceService.PromptGamePassPurchase(plr, Object.id)
            }
        }
    }
})

MarketplaceService.PromptGamePassPurchaseFinished.Connect((player, purchasedPassID, purchaseSuccess) => {
    if(purchaseSuccess === true){
        let obj = {id:-1,tool:new Instance("Tool")}
        gamepasses.forEach(Element => {
            if(Element.id === purchasedPassID){
                obj = Element
            }
        })
        
        if(obj.id === -1){
		    let tool = obj.tool.Clone();
            let Backpack = player?.Character?.FindFirstChild("Backpack")
            if(Backpack && Backpack.IsA("Folder")){
                tool.Parent = Backpack
            }
        }
    }
})

ReplicatedStorage.Events.Uniform.OnServerEvent.Connect((plr:Player, shirtId, pantId, Cover, CoverLocation, CoverWeldPoint, Gear, GearLocation, GearWeldPoint,Accessory, AccessoryLocation, AccessoryWeldPoint, Hair, HairAccessoryLocation, HairAccessoryWeldPoint) => {
    if(shirtId !== -1){
        let character = plr.Character
        if(character && character.IsA("Model")){
            let pants = character.FindFirstChildOfClass("Pants")
            if(pants && pants.IsA("Pants")){
                pants.PantsTemplate = 'rbxassetid://'+pantId
            }else{
                pants = new Instance('Pants', character)
                pants.PantsTemplate = 'rbxassetid://'+pantId
            }
            let shirt = character.FindFirstChildOfClass("Shirt")
            if(shirt && shirt.IsA("Shirt")){
                shirt.ShirtTemplate = 'rbxassetid://'+shirtId
            }else{
                shirt = new Instance('Shirt', character)
                shirt.ShirtTemplate = 'rbxassetid://'+shirtId
            }
        } 
    }
    if(Cover !== ""){
        if(typeIs(CoverLocation, "string") && typeIs(Cover, "string") && typeIs(CoverWeldPoint, "string")){
            let hum = plr.Character?.FindFirstChild("Humanoid")
            if(hum && hum.IsA("Humanoid")){
                hum.RemoveAccessories()
            }
            let assetLocation = ReplicatedStorage.Assets.Covers.FindFirstChild(CoverLocation)
            if(assetLocation && assetLocation.IsA("Folder")){
                let model = assetLocation.FindFirstChild(Cover)
                if( model && model.IsA("Model")){
                   Weldpart(plr, model, CoverWeldPoint, "Cover") 
                }
            }
        }
    }

    if(Gear !== ""){
        if(typeIs(GearLocation, "string") && typeIs(Gear, "string") && typeIs(GearWeldPoint, "string")){
            let hum = plr.Character?.FindFirstChild("Humanoid")
            if(hum && hum.IsA("Humanoid")){
                hum.RemoveAccessories()
            }
            let assetLocation = ReplicatedStorage.Assets.Covers.FindFirstChild(GearLocation)
            if(assetLocation && assetLocation.IsA("Folder")){
                let model = assetLocation.FindFirstChild(Gear)
                if(model && model.IsA("Model")){
                   Weldpart(plr, model, GearWeldPoint, "Gear") 
                }
            }
        }
    }

    if(Accessory !== ""){
        if(typeIs(AccessoryLocation, "string") && typeIs(Accessory, "string") && typeIs(AccessoryWeldPoint, "string")){
            let hum = plr.Character?.FindFirstChild("Humanoid")
            if(hum && hum.IsA("Humanoid")){
                hum.RemoveAccessories()
            }
            let assetLocation = ReplicatedStorage.Assets.Covers.FindFirstChild(AccessoryLocation)
            if(assetLocation && assetLocation.IsA("Folder")){
                let model = assetLocation.FindFirstChild(Accessory)
                if(model && model.IsA("Model")){
                   Weldpart(plr, model, AccessoryWeldPoint, "Hair") 
                }
            }
        }
    }
    if(Hair !== ""){
        if(typeIs(HairAccessoryLocation, "string") && typeIs(Hair, "string") && typeIs(HairAccessoryWeldPoint, "string")){
            let hum = plr.Character?.FindFirstChild("Humanoid")
            if(hum && hum.IsA("Humanoid")){
                hum.RemoveAccessories()
            }
            let assetLocation = ReplicatedStorage.Assets.Covers.FindFirstChild(HairAccessoryLocation)
            if(assetLocation && assetLocation.IsA("Folder")){
                let model = assetLocation.FindFirstChild(Hair)
                if(model && model.IsA("Model")){
                   Weldpart(plr, model, HairAccessoryWeldPoint, "Accessory") 
                }
            }
        }
    }
})

