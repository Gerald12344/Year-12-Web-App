-- Compiled with roblox-ts v1.0.0-beta.15
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local _0 = TS.import(script, TS.getModule(script, "services"))
local ReplicatedStorage = _0.ReplicatedStorage
local HttpService = _0.HttpService
local Admin = { 179974257 }
local USM = 5538710
local CombatObj = { "6349508695", "6349511760", "6349513542", "6349530419", "6349534564", "6349554711", "6349555851", "6349558099", "6349560736", "6349563409", "6349566372", "6349568293", "6349570824", "6349581966", "6349585653", "6349589756", "6349589756", "6349589756", "6349589756", "6349589756", "6349589756", "6349589756" }
local ArmyUniforms = { {
	Name = "Army Combats",
	ShirtID = "6348507490",
	PantsId = "6348510366",
	GroupRequired = 5538710,
	RankRequired = 1,
	types = "uniform",
	location = "",
	locationPart = "",
	itemName = "",
}, {
	Name = "Army Formals",
	ShirtID = "6273272948",
	PantsId = "6273273744",
	GroupRequired = 5538710,
	RankRequired = 1,
	types = "uniform",
	location = "",
	locationPart = "",
	itemName = "",
}, {
	Name = "Army 1ID Formals",
	ShirtID = "6273274364",
	PantsId = "6273273744",
	GroupRequired = 9174105,
	RankRequired = 1,
	types = "uniform",
	location = "",
	locationPart = "",
	itemName = "",
}, {
	Name = "Army 82nd Formals",
	ShirtID = "6273275946",
	PantsId = "6273273744",
	GroupRequired = 5538710,
	RankRequired = 95,
	types = "uniform",
	location = "",
	locationPart = "",
	itemName = "",
}, {
	Name = "Army 84th Formals",
	ShirtID = "6273276924",
	PantsId = "6273273744",
	GroupRequired = 9174586,
	RankRequired = 1,
	types = "uniform",
	location = "",
	locationPart = "",
	itemName = "",
}, {
	Name = "Army Tank Corps Formals",
	ShirtID = "6273277454",
	PantsId = "6273273744",
	GroupRequired = 9174363,
	RankRequired = 1,
	types = "uniform",
	location = "",
	locationPart = "",
	itemName = "",
}, {
	Name = "Army 3ID Formals",
	ShirtID = "6273275361",
	PantsId = "6273273744",
	GroupRequired = 5538710,
	RankRequired = 95,
	types = "uniform",
	location = "",
	locationPart = "",
	itemName = "",
}, {
	Name = "Army MP Formals",
	ShirtID = "6273277964",
	PantsId = "6273273744",
	GroupRequired = 9174698,
	RankRequired = 1,
	types = "uniform",
	location = "",
	locationPart = "",
	itemName = "",
} }
local ArmyCovers = { {
	Name = "Brodie Helmet",
	GroupRequired = 5538710,
	RankRequired = 1,
	itemName = "Brodie",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Enlisted Class A",
	GroupRequired = 5538710,
	RankRequired = 1,
	itemName = "EnlistedCrusherCap",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Enlisted Class B",
	GroupRequired = 5538710,
	RankRequired = 10,
	itemName = "EnlistedClassB",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "MP Brodie Helmet",
	GroupRequired = 9174698,
	RankRequired = 1,
	itemName = "MilitaryPoliceCombat",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Company Grade Class A",
	GroupRequired = 5538710,
	RankRequired = 45,
	itemName = "ClassACompanyGrade",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Field Grade Class A",
	GroupRequired = 5538710,
	RankRequired = 60,
	itemName = "ClassAFieldGrade",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "General Grade Class A",
	GroupRequired = 5538710,
	RankRequired = 75,
	itemName = "ClassAGeneralGrade",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "MP Officer Class A",
	GroupRequired = 9174698,
	RankRequired = 1,
	itemName = "MPOfficerClassA",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Company Grade Class B",
	GroupRequired = 5538710,
	RankRequired = 45,
	itemName = "ClassBCompanyGrade",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Field Grade Class B",
	GroupRequired = 5538710,
	RankRequired = 60,
	itemName = "ClassBFieldGrade",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "General Grade Class B",
	GroupRequired = 5538710,
	RankRequired = 75,
	itemName = "ClassBGeneralGrade",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "MP Officer Class B",
	GroupRequired = 9174698,
	RankRequired = 1,
	itemName = "MPOfficerClassB",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "3A XO Crusher",
	GroupRequired = 9173978,
	RankRequired = 25,
	itemName = "3AXO",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "3A CO Crusher",
	GroupRequired = 9173978,
	RankRequired = 30,
	itemName = "3ACO",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "DPMG Brodie",
	GroupRequired = 9174698,
	RankRequired = 60,
	itemName = "DPMG Brodie",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "PMG Brodie",
	GroupRequired = 9174698,
	RankRequired = 65,
	itemName = "PMG Brodie",
	types = "Cover",
	location = "ArmyCovers",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
} }
local ArmyGear = { {
	Name = "Basic Webbing",
	GroupRequired = 5538710,
	RankRequired = 1,
	itemName = "BasicWebbing",
	types = "Cover",
	location = "ArmyGear",
	locationPart = "Torso",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Enlisted Gear",
	GroupRequired = 5538710,
	RankRequired = 10,
	itemName = "EnlistedWebbings",
	types = "Cover",
	location = "ArmyGear",
	locationPart = "Torso",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Infantry Gear A",
	GroupRequired = 9173978,
	RankRequired = 1,
	itemName = "IDWebbingA",
	types = "Cover",
	location = "ArmyGear",
	locationPart = "Torso",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Infantry Gear B",
	GroupRequired = 9173978,
	RankRequired = 1,
	itemName = "IDWebbingB",
	types = "Cover",
	location = "ArmyGear",
	locationPart = "Torso",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "MP Gear",
	GroupRequired = 9174698,
	RankRequired = 1,
	itemName = "MpGear",
	types = "Cover",
	location = "ArmyGear",
	locationPart = "Torso",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Officer Belt",
	GroupRequired = 5538710,
	RankRequired = 45,
	itemName = "OfficerGear",
	types = "Cover",
	location = "ArmyGear",
	locationPart = "Torso",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "General Grade Belt A",
	GroupRequired = 5538710,
	RankRequired = 75,
	itemName = "GeneralGradeBeltA",
	types = "Cover",
	location = "ArmyGear",
	locationPart = "Torso",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "General Grade Belt B",
	GroupRequired = 5538710,
	RankRequired = 75,
	itemName = "GeneralGradeBeltB",
	types = "Cover",
	location = "ArmyGear",
	locationPart = "Torso",
	ShirtID = "",
	PantsId = "",
} }
local Hair = { {
	Name = "Male Brown Hair",
	GroupRequired = 0,
	RankRequired = 0,
	itemName = "MaleBrown",
	types = "Hair",
	location = "Accessories",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Male Black Hair",
	GroupRequired = 0,
	RankRequired = 0,
	itemName = "MaleBlack",
	types = "Hair",
	location = "Accessories",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Male Blond Hair",
	GroupRequired = 0,
	RankRequired = 0,
	itemName = "MaleBlond",
	types = "Hair",
	location = "Accessories",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Female Brown Hair",
	GroupRequired = 0,
	RankRequired = 0,
	itemName = "FemaleBrown",
	types = "Hair",
	location = "Accessories",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Female Black Hair",
	GroupRequired = 0,
	RankRequired = 0,
	itemName = "FemaleBlack",
	types = "Hair",
	location = "Accessories",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
}, {
	Name = "Female Blond Hair",
	GroupRequired = 0,
	RankRequired = 0,
	itemName = "FemaleBlond",
	types = "Hair",
	location = "Accessories",
	locationPart = "Head",
	ShirtID = "",
	PantsId = "",
} }
local Accessories = { {
	Name = "MP Armband",
	GroupRequired = 9174698,
	RankRequired = 1,
	itemName = "MPArmBand",
	types = "Accessory",
	location = "3dGear",
	locationPart = "Left Arm",
	ShirtID = "",
	PantsId = "",
} }
local function CreatePage(frame, types, cover, Character, player)
	local outArray = types == "ArmyUniforms" and ArmyUniforms or types == "ArmyCovers" and ArmyCovers or types == "ArmyGear" and ArmyGear or types == "Hair" and Hair or Accessories
	for _, Item in ipairs(frame:GetChildren()) do
		if Item.Name ~= "UIGridLayout" then
			Item:Destroy()
		end
	end
	for _, Element in ipairs(outArray) do
		local item = ReplicatedStorage.Assets["GUI Assets"].BasicModule
		local workingItem = item:Clone()
		workingItem.TextLabel.Text = Element.Name
		if cover then
			local coversFolder = (ReplicatedStorage.Assets.Covers):FindFirstChild(Element.location)
			if coversFolder and coversFolder:IsA("Folder") then
				local covers = coversFolder:FindFirstChild(Element.itemName)
				if covers and covers:IsA("Model") then
					local hat = covers:Clone()
					hat.Parent = workingItem.ViewportFrame.Hum
					hat.Name = "Hat"
					local PrimaryPart = hat.PrimaryPart
					if PrimaryPart and PrimaryPart:IsA("Part") then
						PrimaryPart.Transparency = 1
					end
					workingItem.ViewportFrame.Head.Value = (types == "ArmyCovers" or types == "Hair") and true or false
					local weldType = workingItem.ViewportFrame.Hum:WaitForChild(Element.locationPart)
					if weldType and weldType:IsA("Part") or weldType:IsA("MeshPart") then
						hat:SetPrimaryPartCFrame(weldType.CFrame)
					end
					workingItem.ViewportFrame.Hum.Name = ""
				end
			end
		else
			workingItem.ViewportFrame.Hum.Shirt.ShirtTemplate = "rbxassetid://" .. Element.ShirtID
			workingItem.ViewportFrame.Hum.Pants.PantsTemplate = "rbxassetid://" .. Element.PantsId
			workingItem.ViewportFrame.Hum.Name = ""
		end
		workingItem.MouseButton1Click:Connect(function()
			local admin = false
			local _1 = Admin
			local _2 = function(element)
				if player.UserId == element then
					admin = true
				end
			end
			-- ▼ ReadonlyArray.forEach ▼
			for _3, _4 in ipairs(_1) do
				_2(_4, _3 - 1, _1)
			end
			-- ▲ ReadonlyArray.forEach ▲
			if player:GetRankInGroup(Element.GroupRequired) < Element.RankRequired and admin == false then
				return nil
			end
			local humanoid = Character:FindFirstChild("Humanoid")
			if humanoid and humanoid:IsA("Humanoid") then
				humanoid:RemoveAccessories()
			end
			local _3 = frame
			if _3 ~= nil then
				_3 = _3.Parent
				if _3 ~= nil then
					_3 = _3.Parent
					if _3 ~= nil then
						_3 = _3:FindFirstChild("Types")
					end
				end
			end
			local data = _3
			if data and data:IsA("ImageLabel") then
				local _4 = data
				if _4 ~= nil then
					_4 = _4:FindFirstChild("Data")
				end
				data = _4
				if data and data:IsA("Folder") then
					data = data:FindFirstChild(types)
					if data and data:IsA("StringValue") then
						if types == "ArmyUniforms" then
							local rank = player:GetRankInGroup(USM)
							if Element.Name == "Army Combats" and rank > 5 then
								if rank > 90 then
									Element.ShirtID = "6349589756"
								else
									local id = CombatObj[rank / 5 + 1]
									if id ~= "" and id then
										Element.ShirtID = id
									end
								end
							end
						end
						data.Value = HttpService:JSONEncode(Element)
					end
				end
			end
			-- Live uppdate
			if types == "ArmyUniforms" then
				local shirt = Character:FindFirstChildOfClass("Shirt")
				local rank = player:GetRankInGroup(USM)
				if Element.Name == "Army Combats" and rank > 5 then
					if rank > 90 then
						Element.ShirtID = "6349589756"
					else
						local id = CombatObj[rank / 5 + 1]
						if id ~= "" and id then
							Element.ShirtID = id
						end
					end
				end
				if shirt and shirt:IsA("Shirt") then
					shirt.ShirtTemplate = "rbxassetid://" .. Element.ShirtID
				else
					local shirt = Instance.new("Shirt", Character)
					shirt.ShirtTemplate = "rbxassetid://" .. Element.ShirtID
				end
				local pants = Character:FindFirstChildOfClass("Pants")
				if pants and pants:IsA("Pants") then
					pants.PantsTemplate = "rbxassetid://" .. Element.PantsId
				else
					local pants = Instance.new("Pants", Character)
					pants.PantsTemplate = "rbxassetid://" .. Element.PantsId
				end
			else
				local hat = Character:FindFirstChild(types)
				if hat then
					hat:Destroy()
				end
				local coversFolder = (ReplicatedStorage.Assets.Covers):FindFirstChild(Element.location)
				if coversFolder and coversFolder:IsA("Folder") then
					local covers = coversFolder:FindFirstChild(Element.itemName)
					if covers and covers:IsA("Model") then
						local hat = covers:Clone()
						hat.Parent = Character
						hat.Name = types
						workingItem.ViewportFrame.Head.Value = types == "ArmyCovers" and true or false
						local weldType = Character:WaitForChild(Element.locationPart)
						local PrimaryPart = hat.PrimaryPart
						if PrimaryPart and PrimaryPart:IsA("Part") then
							PrimaryPart.Transparency = 1
						end
						if weldType and weldType:IsA("Part") or weldType:IsA("MeshPart") then
							hat:SetPrimaryPartCFrame(weldType.CFrame)
						end
					end
				end
			end
			-- ReplicatedStorage.Events.Uniform.FireServer(Element)
		end)
		workingItem.Parent = frame
	end
end
local exportsData = {
	uniforms = {
		ArmyUniforms = ArmyUniforms,
	},
	covers = {
		ArmyCovers = ArmyCovers,
	},
	CreatePage = CreatePage,
}
local default = exportsData
return {
	CreatePage = CreatePage,
	default = default,
}
