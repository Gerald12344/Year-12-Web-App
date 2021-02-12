-- Compiled with roblox-ts v1.0.0-beta.15
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- Written by GeraldIn2016 04/02/2021 (DD/MM/YYYY)
local Teams = TS.import(script, TS.getModule(script, "services")).Teams
local MP = 9174698
local function teamPlayer(plr, GroupID)
	local rank = plr:GetRankInGroup(GroupID)
	local citizen = Teams:FindFirstChild("Civilian")
	if citizen and citizen:IsA("Team") then
		if rank >= 85 then
			print("here")
			local Team = Teams:FindFirstChild("Headquarters")
			plr.Team = Team and Team:IsA("Team") and Team or citizen
			plr:LoadCharacter()
			return nil
		end
		if rank >= 45 then
			local Team = Teams:FindFirstChild("Officers")
			plr.Team = Team and Team:IsA("Team") and Team or citizen
			plr:LoadCharacter()
			return nil
		end
		if plr:IsInGroup(MP) then
			local Team = Teams:FindFirstChild("Military Police")
			plr.Team = Team and Team:IsA("Team") and Team or citizen
			plr:LoadCharacter()
			return nil
		end
		if rank >= 10 then
			local Team = Teams:FindFirstChild("US Military")
			plr.Team = Team and Team:IsA("Team") and Team or citizen
			plr:LoadCharacter()
			return nil
		end
		if rank >= 10 then
			local Team = Teams:FindFirstChild("Basic  Training")
			plr.Team = Team and Team:IsA("Team") and Team or citizen
			plr:LoadCharacter()
			return nil
		end
		local Team = Teams:FindFirstChild("Civilian")
		plr.Team = Team and Team:IsA("Team") and Team or citizen
		plr:LoadCharacter()
		return nil
	end
end
return {
	teamPlayer = teamPlayer,
}
