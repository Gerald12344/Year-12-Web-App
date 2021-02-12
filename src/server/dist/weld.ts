//Written By GeraldIn2016 03/02/2021
import { ReplicatedStorage } from '@rbxts/services'
let groupdID = 5538710


function addInsginias(plr:Player,model:Model):Model{
    let rank = plr.GetRankInGroup(groupdID)
    if(rank < 45){
        return model
    }
    let rankInsignia = ReplicatedStorage.Assets.Covers.Insignias.FindFirstChild(rank)
    if(rankInsignia && (rankInsignia.IsA("Part") || rankInsignia.IsA("Model") || rankInsignia.IsA("UnionOperation") || rankInsignia.IsA("MeshPart"))){
        if(rankInsignia.IsA("Model")){
            let children = rankInsignia.GetChildren()
            children.forEach(item => {
                let partInsignia = item.Clone()
                partInsignia.Parent = model
            })
        }else{
            let child = rankInsignia.Clone()
            child.Parent = model
        }
    }

    return model
}


export function Weldpart(player:Player,item:Model,location:string, Type:string){
    let children = player.Character?.GetChildren()
    children?.forEach((element)=> {
        if(element.Name === Type){
            element.Destroy()
        }
    })

    let g = item.Clone()
    if(g.Name === "Brodie"){
        g = addInsginias(player,g)
    }
    g.Parent = player.Character
    let c = g.GetChildren()
    c.forEach((element) => {
        if(element && (element.IsA("Part") || element.IsA("MeshPart") || element.IsA("UnionOperation"))){
            let w = new Instance("Weld")
            w.Part0 = g?.PrimaryPart
            w.Part1 = element
            let CJ = new CFrame(g.PrimaryPart?.Position!)
            let primarypart = g.PrimaryPart
            if(primarypart && primarypart.IsA("Part")){
                let C0 = primarypart?.CFrame?.Inverse().mul(CJ)
                let C1 = element?.CFrame?.Inverse().mul(CJ)
                w.C0 = C0
                w.C1 = C1
                w.Parent = g?.PrimaryPart
                primarypart.Transparency = 1
            }
            let Y = new Instance("Weld")
            let weldingPart = player.Character?.FindFirstChild(location)
            if(weldingPart && (weldingPart.IsA("MeshPart") || weldingPart.IsA("Part"))){
                Y.Part0 = weldingPart
                Y.Part1 = g?.PrimaryPart
                Y.C0 = new CFrame(0,0,0)
                Y.Parent = Y.Part0
            }          
        }
    })
    let h = g.GetChildren()
    h.forEach(item => {
        if(item && (item.IsA("Part") || item.IsA("MeshPart")) || item.IsA("UnionOperation")){
            item.Anchored = false
            item.CanCollide = false
        }
    })
    g.Name = Type
}

