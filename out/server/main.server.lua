-- Compiled with roblox-ts v1.0.0-beta.15
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local _0 = TS.import(script, TS.getModule(script, "services"))
local Teams = _0.Teams
local ReplicatedStorage = _0.ReplicatedStorage
local Players = _0.Players
local MarketplaceService = _0.MarketplaceService
local Weldpart = TS.import(script, game:GetService("ServerScriptService"), "Server", "dist", "weld").Weldpart
local teamPlayer = TS.import(script, game:GetService("ServerScriptService"), "Server", "dist", "team").teamPlayer
local USM = 5538710
local gamepasses = { {
	id = 14541167,
	tool = ReplicatedStorage.Assets.Weapons.AccessPass,
}, {
	id = 14692681,
	tool = ReplicatedStorage.Assets.Weapons.MG15,
}, {
	id = 14692708,
	tool = ReplicatedStorage.Assets.Weapons["Gewehr 98 Scoped"],
}, {
	id = 14692766,
	tool = ReplicatedStorage.Assets.Weapons.MP18,
}, {
	id = 14693411,
	tool = ReplicatedStorage.Assets.Weapons["Mosin Nagant"],
}, {
	id = 14693452,
	tool = ReplicatedStorage.Assets.Weapons.Luger,
}, {
	id = 14693590,
	tool = ReplicatedStorage.Assets.Weapons.Luger,
} }
ReplicatedStorage.Events.ChangeTeam.OnServerEvent:Connect(function(plr, teamName)
	local _1 = plr.Team
	if _1 ~= nil then
		_1 = _1.Name
	end
	if _1 == teamName then
		return nil
	end
	local Civilian = Teams:FindFirstChild("Civilian")
	local Hostile = Teams:FindFirstChild("Raiders")
	local Basic = Teams:FindFirstChild("Basic  Training")
	if Civilian and Civilian:IsA("Team") then
		if Hostile and Hostile:IsA("Team") and Basic and Basic:IsA("Team") then
			local _2 = teamName
			if type(_2) == "string" then
				print("got here")
				local rank = plr:GetRankInGroup(USM)
				if teamName == "Civilian" then
					plr.Team = Civilian
					plr:LoadCharacter()
				elseif teamName == "Raiders" then
					if rank == 0 then
						plr.Team = Hostile
						plr:LoadCharacter()
					end
				elseif teamName == "Military" then
					teamPlayer(plr, USM)
					plr:LoadCharacter()
				end
			end
		end
	end
end)
Players.PlayerAdded:Connect(function(plr)
	teamPlayer(plr, USM)
	plr.CharacterAdded:Connect(function(character)
		local _1 = plr.Character
		if _1 ~= nil then
			_1:WaitForChild("Humanoid")
		end
		local _2 = plr.Team
		local _3 = Teams
		if _3 ~= nil then
			_3 = _3:FindFirstChild("Raiders")
		end
		if _2 == _3 then
			local _4 = plr.Character
			if _4 ~= nil then
				_4 = _4:FindFirstChild("Humanoid")
			end
			local hum = _4
			wait(0.2)
			if hum and hum:IsA("Humanoid") then
				hum:RemoveAccessories()
			end
			local GermanShirt = "1081143175"
			local GermanPants = "1081145959"
			local pants = character:FindFirstChildOfClass("Pants")
			if pants and pants:IsA("Pants") then
				pants.PantsTemplate = "rbxassetid://" .. GermanPants
			else
				pants = Instance.new("Pants", character)
				pants.PantsTemplate = "rbxassetid://" .. GermanPants
			end
			local shirt = character:FindFirstChildOfClass("Shirt")
			if shirt and shirt:IsA("Shirt") then
				shirt.ShirtTemplate = "rbxassetid://" .. GermanShirt
			else
				shirt = Instance.new("Shirt", character)
				shirt.ShirtTemplate = "rbxassetid://" .. GermanShirt
			end
			Weldpart(plr, ReplicatedStorage.Assets.Covers.German.GermanCover, "Head", "Cover")
			Weldpart(plr, ReplicatedStorage.Assets.Covers.German.GermanGear, "Torso", "Gear")
			wait(0.5)
			if hum and hum:IsA("Humanoid") then
				hum:RemoveAccessories()
			end
		end
		local _4 = plr.Team
		local _5 = Teams
		if _5 ~= nil then
			_5 = _5:FindFirstChild("Basic  Training")
		end
		if _4 == _5 then
			local _6 = plr.Character
			if _6 ~= nil then
				_6 = _6:FindFirstChild("Humanoid")
			end
			local hum = _6
			wait(0.2)
			if hum and hum:IsA("Humanoid") then
				hum:RemoveAccessories()
			end
			local Shirt = "4632279194"
			local Pants = "4632281273"
			local pants = character:FindFirstChildOfClass("Pants")
			if pants and pants:IsA("Pants") then
				pants.PantsTemplate = "rbxassetid://" .. Pants
			else
				pants = Instance.new("Pants", character)
				pants.PantsTemplate = "rbxassetid://" .. Pants
			end
			local shirt = character:FindFirstChildOfClass("Shirt")
			if shirt and shirt:IsA("Shirt") then
				shirt.ShirtTemplate = "rbxassetid://" .. Shirt
			else
				shirt = Instance.new("Shirt", character)
				shirt.ShirtTemplate = "rbxassetid://" .. Shirt
			end
			Weldpart(plr, ReplicatedStorage.Assets.Covers.BasicTraining.Helmet, "Head", "Cover")
			Weldpart(plr, ReplicatedStorage.Assets.Covers.BasicTraining.Webbing, "Torso", "Gear")
			wait(0.5)
			if hum and hum:IsA("Humanoid") then
				hum:RemoveAccessories()
			end
		end
	end)
end)
ReplicatedStorage.Events.PurchaseGamepass.OnServerEvent:Connect(function(plr, id)
	local _1 = id
	if type(_1) == "number" then
		local Object = gamepasses[id + 1]
		if Object then
			local PassOwned
			local hasPass = { pcall(function()
				PassOwned = MarketplaceService:UserOwnsGamePassAsync(plr.UserId, Object.id)
			end) }
			if PassOwned == false then
				MarketplaceService:PromptGamePassPurchase(plr, Object.id)
			end
		end
	end
end)
MarketplaceService.PromptGamePassPurchaseFinished:Connect(function(player, purchasedPassID, purchaseSuccess)
	if purchaseSuccess == true then
		local obj = {
			id = -1,
			tool = Instance.new("Tool"),
		}
		local _1 = gamepasses
		local _2 = function(Element)
			if Element.id == purchasedPassID then
				obj = Element
			end
		end
		-- ▼ ReadonlyArray.forEach ▼
		for _3, _4 in ipairs(_1) do
			_2(_4, _3 - 1, _1)
		end
		-- ▲ ReadonlyArray.forEach ▲
		if obj.id == -1 then
			local tool = obj.tool:Clone()
			local _3 = player
			if _3 ~= nil then
				_3 = _3.Character
				if _3 ~= nil then
					_3 = _3:FindFirstChild("Backpack")
				end
			end
			local Backpack = _3
			if Backpack and Backpack:IsA("Folder") then
				tool.Parent = Backpack
			end
		end
	end
end)
ReplicatedStorage.Events.Uniform.OnServerEvent:Connect(function(plr, shirtId, pantId, Cover, CoverLocation, CoverWeldPoint, Gear, GearLocation, GearWeldPoint, Accessory, AccessoryLocation, AccessoryWeldPoint, Hair, HairAccessoryLocation, HairAccessoryWeldPoint)
	if shirtId ~= -1 then
		local character = plr.Character
		if character and character:IsA("Model") then
			local pants = character:FindFirstChildOfClass("Pants")
			if pants and pants:IsA("Pants") then
				pants.PantsTemplate = "rbxassetid://" .. tostring(pantId)
			else
				pants = Instance.new("Pants", character)
				pants.PantsTemplate = "rbxassetid://" .. tostring(pantId)
			end
			local shirt = character:FindFirstChildOfClass("Shirt")
			if shirt and shirt:IsA("Shirt") then
				shirt.ShirtTemplate = "rbxassetid://" .. tostring(shirtId)
			else
				shirt = Instance.new("Shirt", character)
				shirt.ShirtTemplate = "rbxassetid://" .. tostring(shirtId)
			end
		end
	end
	if Cover ~= "" then
		local _1 = CoverLocation
		local _2 = type(_1) == "string"
		if _2 then
			local _3 = Cover
			_2 = type(_3) == "string"
			if _2 then
				local _4 = CoverWeldPoint
				_2 = type(_4) == "string"
			end
		end
		if _2 then
			local _3 = plr.Character
			if _3 ~= nil then
				_3 = _3:FindFirstChild("Humanoid")
			end
			local hum = _3
			if hum and hum:IsA("Humanoid") then
				hum:RemoveAccessories()
			end
			local assetLocation = ReplicatedStorage.Assets.Covers:FindFirstChild(CoverLocation)
			if assetLocation and assetLocation:IsA("Folder") then
				local model = assetLocation:FindFirstChild(Cover)
				if model and model:IsA("Model") then
					Weldpart(plr, model, CoverWeldPoint, "Cover")
				end
			end
		end
	end
	if Gear ~= "" then
		local _1 = GearLocation
		local _2 = type(_1) == "string"
		if _2 then
			local _3 = Gear
			_2 = type(_3) == "string"
			if _2 then
				local _4 = GearWeldPoint
				_2 = type(_4) == "string"
			end
		end
		if _2 then
			local _3 = plr.Character
			if _3 ~= nil then
				_3 = _3:FindFirstChild("Humanoid")
			end
			local hum = _3
			if hum and hum:IsA("Humanoid") then
				hum:RemoveAccessories()
			end
			local assetLocation = ReplicatedStorage.Assets.Covers:FindFirstChild(GearLocation)
			if assetLocation and assetLocation:IsA("Folder") then
				local model = assetLocation:FindFirstChild(Gear)
				if model and model:IsA("Model") then
					Weldpart(plr, model, GearWeldPoint, "Gear")
				end
			end
		end
	end
	if Accessory ~= "" then
		local _1 = AccessoryLocation
		local _2 = type(_1) == "string"
		if _2 then
			local _3 = Accessory
			_2 = type(_3) == "string"
			if _2 then
				local _4 = AccessoryWeldPoint
				_2 = type(_4) == "string"
			end
		end
		if _2 then
			local _3 = plr.Character
			if _3 ~= nil then
				_3 = _3:FindFirstChild("Humanoid")
			end
			local hum = _3
			if hum and hum:IsA("Humanoid") then
				hum:RemoveAccessories()
			end
			local assetLocation = ReplicatedStorage.Assets.Covers:FindFirstChild(AccessoryLocation)
			if assetLocation and assetLocation:IsA("Folder") then
				local model = assetLocation:FindFirstChild(Accessory)
				if model and model:IsA("Model") then
					Weldpart(plr, model, AccessoryWeldPoint, "Hair")
				end
			end
		end
	end
	if Hair ~= "" then
		local _1 = HairAccessoryLocation
		local _2 = type(_1) == "string"
		if _2 then
			local _3 = Hair
			_2 = type(_3) == "string"
			if _2 then
				local _4 = HairAccessoryWeldPoint
				_2 = type(_4) == "string"
			end
		end
		if _2 then
			local _3 = plr.Character
			if _3 ~= nil then
				_3 = _3:FindFirstChild("Humanoid")
			end
			local hum = _3
			if hum and hum:IsA("Humanoid") then
				hum:RemoveAccessories()
			end
			local assetLocation = ReplicatedStorage.Assets.Covers:FindFirstChild(HairAccessoryLocation)
			if assetLocation and assetLocation:IsA("Folder") then
				local model = assetLocation:FindFirstChild(Hair)
				if model and model:IsA("Model") then
					Weldpart(plr, model, HairAccessoryWeldPoint, "Accessory")
				end
			end
		end
	end
end)
