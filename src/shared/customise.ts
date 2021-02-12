import { ReplicatedStorage, HttpService } from "@rbxts/services";
let Admin = [
    179974257,
] 
let USM = 5538710
let CombatObj = ["6349508695", "6349511760","6349513542", "6349530419","6349534564","6349554711","6349555851","6349558099","6349560736","6349563409","6349566372","6349568293","6349570824","6349581966","6349585653","6349589756","6349589756","6349589756","6349589756","6349589756","6349589756","6349589756"]

let ArmyUniforms = [
    {Name:"Army Combats", ShirtID:"6348507490", PantsId:"6348510366", GroupRequired:5538710, RankRequired:1, types:"uniform",location:"", locationPart:"",itemName:""},
    {Name:"Army Formals", ShirtID:"6273272948", PantsId:"6273273744", GroupRequired:5538710, RankRequired:1, types:"uniform",location:"", locationPart:"",itemName:""},
    {Name:"Army 1ID Formals", ShirtID:"6273274364", PantsId:"6273273744", GroupRequired:9174105, RankRequired:1, types:"uniform",location:"", locationPart:"",itemName:""},
    {Name:"Army 82nd Formals", ShirtID:"6273275946", PantsId:"6273273744", GroupRequired:5538710, RankRequired:95, types:"uniform",location:"", locationPart:"",itemName:""},
    {Name:"Army 84th Formals", ShirtID:"6273276924", PantsId:"6273273744", GroupRequired:9174586, RankRequired:1, types:"uniform",location:"", locationPart:"",itemName:""},
    {Name:"Army Tank Corps Formals", ShirtID:"6273277454", PantsId:"6273273744", GroupRequired:9174363, RankRequired:1, types:"uniform",location:"", locationPart:"",itemName:""},
    {Name:"Army 3ID Formals", ShirtID:"6273275361", PantsId:"6273273744", GroupRequired:5538710, RankRequired:95, types:"uniform",location:"", locationPart:"",itemName:""},
    {Name:"Army MP Formals", ShirtID:"6273277964", PantsId:"6273273744", GroupRequired:9174698, RankRequired:1, types:"uniform",location:"", locationPart:"",itemName:""},
]
let ArmyCovers = [

    // Enlisted \\
    {Name:"Brodie Helmet", GroupRequired:5538710, RankRequired:1, itemName:"Brodie", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"Enlisted Class A", GroupRequired:5538710, RankRequired:1, itemName:"EnlistedCrusherCap", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"Enlisted Class B", GroupRequired:5538710, RankRequired:10, itemName:"EnlistedClassB", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"MP Brodie Helmet", GroupRequired:9174698, RankRequired:1, itemName:"MilitaryPoliceCombat", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    
    // Class A \\
    {Name:"Company Grade Class A", GroupRequired:5538710, RankRequired:45, itemName:"ClassACompanyGrade", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"Field Grade Class A", GroupRequired:5538710, RankRequired:60, itemName:"ClassAFieldGrade", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"General Grade Class A", GroupRequired:5538710, RankRequired:75, itemName:"ClassAGeneralGrade", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"MP Officer Class A", GroupRequired:9174698, RankRequired:1, itemName:"MPOfficerClassA", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},

    // Class B \\
    {Name:"Company Grade Class B", GroupRequired:5538710, RankRequired:45, itemName:"ClassBCompanyGrade", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"Field Grade Class B", GroupRequired:5538710, RankRequired:60, itemName:"ClassBFieldGrade", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"General Grade Class B", GroupRequired:5538710, RankRequired:75, itemName:"ClassBGeneralGrade", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"MP Officer Class B", GroupRequired:9174698, RankRequired:1, itemName:"MPOfficerClassB", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    
    // HQ \\
    {Name:"3A XO Crusher", GroupRequired:9173978, RankRequired:25, itemName:"3AXO", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"3A CO Crusher", GroupRequired:9173978, RankRequired:30, itemName:"3ACO", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},   
    {Name:"DPMG Brodie", GroupRequired:9174698, RankRequired:60, itemName:"DPMG Brodie", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"PMG Brodie", GroupRequired:9174698, RankRequired:65, itemName:"PMG Brodie", types:"Cover", location: "ArmyCovers", locationPart:"Head", ShirtID:"", PantsId:"",}, 
]

let ArmyGear = [
    {Name:"Basic Webbing", GroupRequired:5538710, RankRequired:1, itemName:"BasicWebbing", types:"Cover", location: "ArmyGear", locationPart:"Torso", ShirtID:"", PantsId:"",},
    {Name:"Enlisted Gear", GroupRequired:5538710, RankRequired:10, itemName:"EnlistedWebbings", types:"Cover", location: "ArmyGear", locationPart:"Torso", ShirtID:"", PantsId:"",},

    // Infantry \\
    {Name:"Infantry Gear A", GroupRequired:9173978, RankRequired:1, itemName:"IDWebbingA", types:"Cover", location: "ArmyGear", locationPart:"Torso", ShirtID:"", PantsId:"",},
    {Name:"Infantry Gear B", GroupRequired:9173978, RankRequired:1, itemName:"IDWebbingB", types:"Cover", location: "ArmyGear", locationPart:"Torso", ShirtID:"", PantsId:"",},
    
    {Name:"MP Gear", GroupRequired:9174698, RankRequired:1, itemName:"MpGear", types:"Cover", location: "ArmyGear", locationPart:"Torso", ShirtID:"", PantsId:"",},
    {Name:"Officer Belt", GroupRequired:5538710, RankRequired:45, itemName:"OfficerGear", types:"Cover", location: "ArmyGear", locationPart:"Torso", ShirtID:"", PantsId:"",},
    {Name:"General Grade Belt A", GroupRequired:5538710, RankRequired:75, itemName:"GeneralGradeBeltA", types:"Cover", location: "ArmyGear", locationPart:"Torso", ShirtID:"", PantsId:"",},
    {Name:"General Grade Belt B", GroupRequired:5538710, RankRequired:75, itemName:"GeneralGradeBeltB", types:"Cover", location: "ArmyGear", locationPart:"Torso", ShirtID:"", PantsId:"",},
]

let Hair = [
    {Name:"Male Brown Hair", GroupRequired:0, RankRequired:0, itemName:"MaleBrown", types:"Hair", location: "Accessories", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"Male Black Hair", GroupRequired:0, RankRequired:0, itemName:"MaleBlack", types:"Hair", location: "Accessories", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"Male Blond Hair", GroupRequired:0, RankRequired:0, itemName:"MaleBlond", types:"Hair", location: "Accessories", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"Female Brown Hair", GroupRequired:0, RankRequired:0, itemName:"FemaleBrown", types:"Hair", location: "Accessories", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"Female Black Hair", GroupRequired:0, RankRequired:0, itemName:"FemaleBlack", types:"Hair", location: "Accessories", locationPart:"Head", ShirtID:"", PantsId:"",},
    {Name:"Female Blond Hair", GroupRequired:0, RankRequired:0, itemName:"FemaleBlond", types:"Hair", location: "Accessories", locationPart:"Head", ShirtID:"", PantsId:"",},
]

let Accessories = [
    {Name:"MP Armband", GroupRequired:9174698, RankRequired:1, itemName:"MPArmBand", types:"Accessory", location: "3dGear", locationPart:"Left Arm", ShirtID:"", PantsId:"",},
]


export function CreatePage(frame:ScrollingFrame, types:string, cover:boolean, Character:Model, player:Player):void  {
    let outArray = types === "ArmyUniforms" ? ArmyUniforms : types === "ArmyCovers" ? ArmyCovers:types === "ArmyGear" ?  ArmyGear: types === "Hair" ? Hair: Accessories;

    for (const Item  of frame.GetChildren()){
        if(Item.Name !== 'UIGridLayout'){
            Item.Destroy()
        }
    }

    for (const Element of outArray){
        let item = ReplicatedStorage.Assets["GUI Assets"].BasicModule
        let workingItem = item.Clone()
        workingItem.TextLabel.Text = Element.Name
        if(cover){
            let coversFolder = (ReplicatedStorage.Assets.Covers).FindFirstChild(Element.location)
            if(coversFolder && coversFolder.IsA("Folder")) {
                let covers = coversFolder.FindFirstChild(Element.itemName)
                if(covers && covers.IsA("Model")) {
                    let hat = covers.Clone()
                    hat.Parent = workingItem.ViewportFrame.Hum
                    hat.Name = "Hat"
                    let PrimaryPart = hat.PrimaryPart
                    if(PrimaryPart && PrimaryPart.IsA("Part")){
                        PrimaryPart.Transparency = 1
                    }
                    workingItem.ViewportFrame.Head.Value = types === "ArmyCovers" || types === "Hair"  ? true: false
                    let weldType = workingItem.ViewportFrame.Hum.WaitForChild(Element.locationPart)
                    if(weldType && weldType.IsA("Part") || weldType.IsA("MeshPart")) {
                        hat.SetPrimaryPartCFrame(weldType.CFrame)
                    }
                    workingItem.ViewportFrame.Hum.Name = ""

                }
            }
        }else{
            workingItem.ViewportFrame.Hum.Shirt.ShirtTemplate = 'rbxassetid://'+Element.ShirtID
            workingItem.ViewportFrame.Hum.Pants.PantsTemplate = 'rbxassetid://'+Element.PantsId

            workingItem.ViewportFrame.Hum.Name = ""
        }
        workingItem.MouseButton1Click.Connect(() => {
            let admin = false
            Admin.forEach((element) => {
                if(player.UserId === element){
                    admin = true
                }
            })
            if(player.GetRankInGroup(Element.GroupRequired) < Element.RankRequired && admin === false){ return }

            let humanoid = Character.FindFirstChild("Humanoid")
            if(humanoid && humanoid.IsA("Humanoid")){
                humanoid.RemoveAccessories()
            }

            let data = frame?.Parent?.Parent?.FindFirstChild("Types")
            if(data && data.IsA("ImageLabel")){
                data = data?.FindFirstChild("Data")
                if(data && data.IsA("Folder")){
                    data = data.FindFirstChild(types)
                    if(data && data .IsA("StringValue")){
                        if(types === "ArmyUniforms"){
                            let rank = player.GetRankInGroup(USM)
                            if(Element.Name === "Army Combats" && rank > 5){
                                if(rank > 90){
                                    Element.ShirtID = "6349589756"
                                }else{
                                    let id = CombatObj[rank / 5]
                                    if(id){
                                        Element.ShirtID = id
                                    }
                                }
                            }
                        }
                        data.Value = HttpService.JSONEncode(Element)
                    }
                }
            }
            //Live uppdate
            if(types === "ArmyUniforms"){
                let shirt = Character.FindFirstChildOfClass("Shirt")


                let rank = player.GetRankInGroup(USM)
                if(Element.Name === "Army Combats" && rank > 5){
                    if(rank > 90){
                        Element.ShirtID = "6349589756"
                    }else{
                        let id = CombatObj[rank / 5]
                        if(id){
                            Element.ShirtID = id
                        }
                    }
                }


                if(shirt && shirt.IsA("Shirt")){
                    shirt.ShirtTemplate = 'rbxassetid://'+ Element.ShirtID
                }else{
                    let shirt = new Instance("Shirt", Character)
                    shirt.ShirtTemplate = 'rbxassetid://'+ Element.ShirtID
                }
                let pants = Character.FindFirstChildOfClass("Pants")
                if(pants && pants.IsA("Pants")){
                    pants.PantsTemplate = 'rbxassetid://'+ Element.PantsId
                }else{
                    let pants = new Instance("Pants", Character)
                    pants.PantsTemplate = 'rbxassetid://'+ Element.PantsId
                }
            }else{
                let hat = Character.FindFirstChild(types)
                if(hat){
                    hat.Destroy()
                }
                let coversFolder = (ReplicatedStorage.Assets.Covers).FindFirstChild(Element.location)
                if(coversFolder && coversFolder.IsA("Folder")) {
                    let covers = coversFolder.FindFirstChild(Element.itemName)
                    if(covers && covers.IsA("Model")) {
                        let hat = covers.Clone()
                        hat.Parent = Character
                        hat.Name = types
                        workingItem.ViewportFrame.Head.Value =  types === "ArmyCovers" ? true: false
                        let weldType = Character.WaitForChild(Element.locationPart)
                        let PrimaryPart = hat.PrimaryPart
                        if(PrimaryPart && PrimaryPart.IsA("Part")){
                            PrimaryPart.Transparency = 1
                        }
                        if(weldType && weldType.IsA("Part") || weldType.IsA("MeshPart")) {
                            hat.SetPrimaryPartCFrame(weldType.CFrame)
                        }
                    }
                }
            }
            //ReplicatedStorage.Events.Uniform.FireServer(Element)
        })
        workingItem.Parent = frame
    }

}
const exportsData = {uniforms:{ArmyUniforms}, covers: {ArmyCovers}, CreatePage}
export default exportsData