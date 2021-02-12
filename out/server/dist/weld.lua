-- Compiled with roblox-ts v1.0.0-beta.15
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- Written By GeraldIn2016 03/02/2021
local ReplicatedStorage = TS.import(script, TS.getModule(script, "services")).ReplicatedStorage
local groupdID = 5538710
local function addInsginias(plr, model)
	local rank = plr:GetRankInGroup(groupdID)
	if rank < 45 then
		return model
	end
	local rankInsignia = ReplicatedStorage.Assets.Covers.Insignias:FindFirstChild(rank)
	if rankInsignia and (rankInsignia:IsA("Part") or rankInsignia:IsA("Model") or rankInsignia:IsA("UnionOperation") or rankInsignia:IsA("MeshPart")) then
		if rankInsignia:IsA("Model") then
			local children = rankInsignia:GetChildren()
			local _0 = children
			local _1 = function(item)
				local partInsignia = item:Clone()
				partInsignia.Parent = model
			end
			-- ▼ ReadonlyArray.forEach ▼
			for _2, _3 in ipairs(_0) do
				_1(_3, _2 - 1, _0)
			end
			-- ▲ ReadonlyArray.forEach ▲
		else
			local child = rankInsignia:Clone()
			child.Parent = model
		end
	end
	return model
end
local function Weldpart(player, item, location, Type)
	local _0 = player.Character
	if _0 ~= nil then
		_0 = _0:GetChildren()
	end
	local children = _0
	local _1 = children
	if _1 ~= nil then
		local _2 = function(element)
			if element.Name == Type then
				element:Destroy()
			end
		end
		-- ▼ ReadonlyArray.forEach ▼
		for _3, _4 in ipairs(_1) do
			_2(_4, _3 - 1, _1)
		end
		-- ▲ ReadonlyArray.forEach ▲
	end
	local g = item:Clone()
	if g.Name == "Brodie" then
		g = addInsginias(player, g)
	end
	g.Parent = player.Character
	local c = g:GetChildren()
	local _2 = c
	local _3 = function(element)
		if element and (element:IsA("Part") or element:IsA("MeshPart") or element:IsA("UnionOperation")) then
			local w = Instance.new("Weld")
			local _4 = g
			if _4 ~= nil then
				_4 = _4.PrimaryPart
			end
			w.Part0 = _4
			w.Part1 = element
			local _5 = g.PrimaryPart
			if _5 ~= nil then
				_5 = _5.Position
			end
			local CJ = CFrame.new(_5)
			local primarypart = g.PrimaryPart
			if primarypart and primarypart:IsA("Part") then
				local _6 = primarypart
				if _6 ~= nil then
					_6 = _6.CFrame
					if _6 ~= nil then
						local _7 = _6:Inverse()
						local _8 = CJ
						_6 = _7 * _8
					end
				end
				local C0 = _6
				local _7 = element
				if _7 ~= nil then
					_7 = _7.CFrame
					if _7 ~= nil then
						local _8 = _7:Inverse()
						local _9 = CJ
						_7 = _8 * _9
					end
				end
				local C1 = _7
				w.C0 = C0
				w.C1 = C1
				local _8 = g
				if _8 ~= nil then
					_8 = _8.PrimaryPart
				end
				w.Parent = _8
				primarypart.Transparency = 1
			end
			local Y = Instance.new("Weld")
			local _6 = player.Character
			if _6 ~= nil then
				_6 = _6:FindFirstChild(location)
			end
			local weldingPart = _6
			if weldingPart and (weldingPart:IsA("MeshPart") or weldingPart:IsA("Part")) then
				Y.Part0 = weldingPart
				local _7 = g
				if _7 ~= nil then
					_7 = _7.PrimaryPart
				end
				Y.Part1 = _7
				Y.C0 = CFrame.new(0, 0, 0)
				Y.Parent = Y.Part0
			end
		end
	end
	-- ▼ ReadonlyArray.forEach ▼
	for _4, _5 in ipairs(_2) do
		_3(_5, _4 - 1, _2)
	end
	-- ▲ ReadonlyArray.forEach ▲
	local h = g:GetChildren()
	local _4 = h
	local _5 = function(item)
		if item and (item:IsA("Part") or item:IsA("MeshPart")) or item:IsA("UnionOperation") then
			item.Anchored = false
			item.CanCollide = false
		end
	end
	-- ▼ ReadonlyArray.forEach ▼
	for _6, _7 in ipairs(_4) do
		_5(_7, _6 - 1, _4)
	end
	-- ▲ ReadonlyArray.forEach ▲
	g.Name = Type
end
return {
	Weldpart = Weldpart,
}
