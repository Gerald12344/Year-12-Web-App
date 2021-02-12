//Written by GeraldIn2016 04/02/2021 (DD/MM/YYYY)
import { Teams, ReplicatedStorage } from '@rbxts/services'

let MP = 9174698

export function teamPlayer(plr:Player, GroupID:number){
    let rank = plr.GetRankInGroup(GroupID)
    let citizen = Teams.FindFirstChild("Civilian")
    if(citizen && citizen.IsA("Team")){
        if(rank >= 85){
            print('here')
            let Team = Teams.FindFirstChild("Headquarters")
            plr.Team = Team && Team.IsA("Team") ? Team : citizen
            plr.LoadCharacter()
            return
        }
        if(rank >= 45){
            let Team = Teams.FindFirstChild("Officers")
            plr.Team = Team && Team.IsA("Team") ? Team : citizen
            plr.LoadCharacter()
            return
        }
        if(plr.IsInGroup(MP)){
            let Team = Teams.FindFirstChild("Military Police")
            plr.Team = Team && Team.IsA("Team") ? Team : citizen
            plr.LoadCharacter()
            return
        }
        if(rank >= 10){
            let Team = Teams.FindFirstChild("US Military")
            plr.Team = Team && Team.IsA("Team") ? Team : citizen
            plr.LoadCharacter()
            return
        }
        if(rank >= 10){
            let Team = Teams.FindFirstChild("Basic  Training")
            plr.Team = Team && Team.IsA("Team") ? Team : citizen
            plr.LoadCharacter()
            return
        }
        let Team = Teams.FindFirstChild("Civilian")
        plr.Team = Team && Team.IsA("Team") ? Team : citizen
        plr.LoadCharacter()
        return
    }
}

