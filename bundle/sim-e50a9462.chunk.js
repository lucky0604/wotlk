import{ej as e,A as t,er as a,es as s,aQ as l,bV as n,N as i,l as o,et as d,em as c,en as p,ep as r,eq as m,eo as h,F as g,dN as S,dI as u,dL as I,aA as f,bb as v,aB as O,I as y,bl as T,a1 as P,ac as A,G as w,x as b,E,V as W,S as F,bo as k,g as C,u as N,bf as H}from"./detailed_results-f5af08fb.chunk.js";import{t as M,x as R,b as L,c as B,C as D,v as x,w as V,N as j,r as G,y as U,z as q,B as z,E as _,F as K,T as Q,s as J,I as X}from"./preset_utils-b4a552d5.chunk.js";import{T as Y}from"./totem_inputs-eb1d9223.chunk.js";const Z=M({fieldName:"shield",values:[{value:e.NoShield,tooltip:"No Shield"},{actionId:t.fromSpellId(57960),value:e.WaterShield},{actionId:t.fromSpellId(49281),value:e.LightningShield}]}),$=M({fieldName:"imbueMh",values:[{value:a.NoImbue,tooltip:"No Main Hand Enchant"},{actionId:t.fromSpellId(58804),value:a.WindfuryWeapon},{actionId:t.fromSpellId(58790),value:a.FlametongueWeapon,text:"R10"},{actionId:t.fromSpellId(58789),value:a.FlametongueWeaponDownrank,text:"R9"},{actionId:t.fromSpellId(58796),value:a.FrostbrandWeapon}]}),ee=M({fieldName:"imbueOh",values:[{value:a.NoImbue,tooltip:"No Off Hand Enchant"},{actionId:t.fromSpellId(58804),value:a.WindfuryWeapon},{actionId:t.fromSpellId(58790),value:a.FlametongueWeapon,text:"R10"},{actionId:t.fromSpellId(58789),value:a.FlametongueWeaponDownrank,text:"R9"},{actionId:t.fromSpellId(58796),value:a.FrostbrandWeapon}]}),te=R({fieldName:"syncType",label:"Sync/Stagger Setting",labelTooltip:"Choose your sync or stagger option Perfect\n\t\t<ul>\n\t\t\t<li><div>Auto: Will auto pick sync options based on your weapons attack speeds</div></li>\n\t\t\t<li><div>None: No Sync or Staggering, used for mismatched weapon speeds</div></li>\n\t\t\t<li><div>Perfect Sync: Makes your weapons always attack at the same time, for match weapon speeds</div></li>\n\t\t\t<li><div>Delayed Offhand: Adds a slight delay to the offhand attacks while staying within the 0.5s flurry ICD window</div></li>\n\t\t</ul>",values:[{name:"Automatic",value:s.Auto},{name:"None",value:s.NoSync},{name:"Perfect Sync",value:s.SyncMainhandOffhandSwings},{name:"Delayed Offhand",value:s.DelayOffhandSwings}]}),ae={items:[{id:40543,enchant:3817,gems:[41398,40014]},{id:44661,gems:[40014]},{id:40524,enchant:3808,gems:[40014]},{id:40403,enchant:3605},{id:40523,enchant:3832,gems:[40003,40014]},{id:40282,enchant:3845,gems:[42702,0]},{id:40520,enchant:3604,gems:[42154,0]},{id:40275,gems:[42156]},{id:40522,enchant:3823,gems:[39999,42156]},{id:40367,enchant:3606,gems:[40058]},{id:40474},{id:40074},{id:40684},{id:37390},{id:39763,enchant:3789},{id:39468,enchant:3789},{id:40322}]},se={items:[{id:45610,enchant:3817,gems:[41398,42702]},{id:45517,gems:[39999]},{id:46203,enchant:3808,gems:[39999]},{id:45461,enchant:3831,gems:[40014]},{id:46205,enchant:3832,gems:[40058,40053]},{id:45460,enchant:3845,gems:[39999,0]},{id:46200,enchant:3604,gems:[40014,0]},{id:45553,gems:[36766,36766,36766]},{id:46208,enchant:3823,gems:[39999,39999]},{id:45989,enchant:3606,gems:[40053,39999]},{id:45456,gems:[39999]},{id:46046,gems:[40053]},{id:45609},{id:46038},{id:45612,enchant:3789,gems:[39999]},{id:46097,enchant:3789,gems:[40003]},{id:40322}]},le={items:[{id:45610,enchant:3817,gems:[41398,42702]},{id:45517,gems:[39999]},{id:46203,enchant:3808,gems:[39999]},{id:45461,enchant:3831,gems:[40052]},{id:46205,enchant:3832,gems:[40052,40052]},{id:45460,enchant:3845,gems:[39999,0]},{id:46200,enchant:3604,gems:[40053,0]},{id:45553,gems:[36766,36766,36766]},{id:46208,enchant:3823,gems:[39999,39999]},{id:45989,enchant:3606,gems:[40053,39999]},{id:45456,gems:[39999]},{id:45608,gems:[39999]},{id:45609},{id:46038},{id:45132,enchant:3789,gems:[40052]},{id:46097,enchant:3789,gems:[39999]},{id:40322}]},ne={items:[{id:48353,enchant:3817,gems:[41398,40128]},{id:47060,gems:[40159]},{id:48351,enchant:3808,gems:[40128]},{id:47552,enchant:3722,gems:[40159]},{id:46965,enchant:3832,gems:[40159,49110,40128]},{id:47916,enchant:3845,gems:[40159,0]},{id:48354,enchant:3604,gems:[40128,0]},{id:47112,enchant:3599,gems:[40128,40159,40128]},{id:48352,enchant:3823,gems:[40128,40128]},{id:47099,enchant:3606,gems:[40128,40128]},{id:46046,gems:[40128]},{id:47075,gems:[40128]},{id:47188},{id:45609},{id:47206,enchant:3789},{id:47156,enchant:3789,gems:[40128]},{id:47666}]},ie={items:[{id:48358,enchant:3817,gems:[41398,40128]},{id:47433,gems:[40159]},{id:48360,enchant:3808,gems:[40128]},{id:47551,enchant:3722,gems:[40159]},{id:47412,enchant:3832,gems:[40159,49110,40128]},{id:47989,enchant:3845,gems:[40159,0]},{id:48357,enchant:3604,gems:[40128,0]},{id:47460,enchant:3599,gems:[40128,40159,40128]},{id:48359,enchant:3823,gems:[40128,40128]},{id:47456,enchant:3606,gems:[40128,40128]},{id:46046,gems:[40128]},{id:47443,gems:[40128]},{id:47477},{id:45609},{id:47483,enchant:3789},{id:47475,enchant:3789,gems:[40128]},{id:47666}]},oe={items:[{id:51242,enchant:3817,gems:[41398,40118]},{id:50658,gems:[42156]},{id:51240,enchant:3808,gems:[40128]},{id:50653,enchant:3831,gems:[40128]},{id:51244,enchant:3832,gems:[40118,49110]},{id:50687,enchant:3845,gems:[40128,0]},{id:50619,enchant:3604,gems:[40125,40118,0]},{id:50613,enchant:3599,gems:[40128,40118,40128]},{id:51241,enchant:3823,gems:[40118,40128]},{id:50711,enchant:3606,gems:[40128,40128]},{id:50604,gems:[42156]},{id:50402,gems:[42156]},{id:50343},{id:45609},{id:51939,enchant:3789,gems:[40118]},{id:50710,enchant:3789,gems:[40118]},{id:50458}]},de={items:[{id:51242,enchant:3817,gems:[41398,40118]},{id:51890,gems:[40118]},{id:51240,enchant:3808,gems:[40128]},{id:50653,enchant:3831,gems:[40128]},{id:51244,enchant:3832,gems:[40118,49110]},{id:51914,enchant:3845,gems:[40118,0]},{id:50619,enchant:3604,gems:[40128,40159,0]},{id:50993,gems:[42150,42150,42150]},{id:51241,enchant:3823,gems:[40118,40159]},{id:50711,enchant:3606,gems:[40128,40128]},{id:50604,gems:[40128]},{id:50402,gems:[40128]},{id:50355},{id:50343},{id:50692,enchant:3789,gems:[40128]},{id:50710,enchant:3789,gems:[40128]},{id:50458}]},ce={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:66842}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{castSpell:{spellId:{spellId:51533}}}},{action:{castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{castSpell:{spellId:{spellId:2825}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:53817}}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{spellId:49238}}}},{action:{castSpell:{spellId:{spellId:17364}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:49233}}},rhs:{const:{val:"0s"}}}},castSpell:{spellId:{spellId:49233}}}},{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:17364}}}}},castSpell:{spellId:{spellId:17364}}}},{action:{castSpell:{spellId:{spellId:49231}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{totemRemainingTime:{totemType:"Water"}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:66842}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:58734}}},rhs:{const:{val:"100ms"}}}},{not:{val:{auraIsActive:{auraId:{spellId:2894}}}}}]}},castSpell:{spellId:{spellId:58734}}}},{action:{castSpell:{spellId:{spellId:61657}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:49281}}}}},castSpell:{spellId:{spellId:49281}}}},{action:{castSpell:{spellId:{spellId:60103}}}}]},pe={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:66842}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{castSpell:{spellId:{spellId:51533}}}},{action:{castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{castSpell:{spellId:{spellId:2825}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:53817}}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{spellId:49238}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{spellId:53817}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpLt",lhs:{math:{op:"OpAdd",lhs:{const:{val:"300ms"}},rhs:{spellCastTime:{spellId:{spellId:49238}}}}},rhs:{autoTimeToNext:{}}}}]}},castSpell:{spellId:{spellId:49238}}}},{action:{castSpell:{spellId:{spellId:17364}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:49233}}},rhs:{const:{val:"0s"}}}},castSpell:{spellId:{spellId:49233}}}},{action:{castSpell:{spellId:{spellId:49231}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{totemRemainingTime:{totemType:"Water"}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:66842}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:58734}}},rhs:{const:{val:"100ms"}}}},{not:{val:{auraIsActive:{auraId:{spellId:2894}}}}}]}},castSpell:{spellId:{spellId:58734}}}},{action:{castSpell:{spellId:{spellId:61657}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:49281}}}}},castSpell:{spellId:{spellId:49281}}}},{action:{castSpell:{spellId:{spellId:60103}}}}]},re={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:66842}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{castSpell:{spellId:{spellId:51533}}}},{action:{castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{castSpell:{spellId:{spellId:2825}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:49233}}},rhs:{const:{val:"0s"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}}]}},castSpell:{spellId:{spellId:49233}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:53817}}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{spellId:49238}}}},{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:17364}}}}},castSpell:{spellId:{spellId:17364}}}},{action:{castSpell:{spellId:{spellId:49231}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{totemRemainingTime:{totemType:"Water"}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:66842}}}},{action:{castSpell:{spellId:{spellId:17364}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:58734}}},rhs:{const:{val:"100ms"}}}},{not:{val:{auraIsActive:{auraId:{spellId:2894}}}}}]}},castSpell:{spellId:{spellId:58734}}}},{action:{castSpell:{spellId:{spellId:61657}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:49281}}}}},castSpell:{spellId:{spellId:49281}}}},{action:{castSpell:{spellId:{spellId:60103}}}}]},me=L("Preraid Preset",{items:[{id:43311,enchant:3817,gems:[41398,42156]},{id:40678},{id:37373,enchant:3808},{id:37840,enchant:3605},{id:39597,enchant:3832,gems:[40053,40088]},{id:43131,enchant:3845,gems:[0]},{id:39601,enchant:3604,gems:[40053,0]},{id:37407,gems:[42156]},{id:37669,enchant:3823},{id:37167,enchant:3606,gems:[40053,42156]},{id:37685},{id:37642},{id:37390},{id:40684},{id:41384,enchant:3789},{id:40704,enchant:3789},{id:33507}]}),he=L("P1 Preset",ae),ge=L("P2 Preset FT",se),Se=L("P2 Preset WF",le),ue=L("P3 Preset [A]",ne,{faction:l.Alliance}),Ie=L("P3 Preset [H]",ie,{faction:l.Horde}),fe=L("P4 Preset FT",oe),ve=L("P4 Preset WF",de),Oe=B("Default FT",ce),ye=B("Default WF",pe),Te=B("Phase 3",re),Pe={name:"Standard",data:n.create({talentsString:"053030152-30405003105021333031131031051",glyphs:i.create({major1:o.GlyphOfFireNova,major2:o.GlyphOfFlametongueWeapon,major3:o.GlyphOfFeralSpirit})})},Ae={name:"Phase 3",data:n.create({talentsString:"053030152-30505003105001333031131131051",glyphs:i.create({major1:o.GlyphOfFireNova,major2:o.GlyphOfFlametongueWeapon,major3:o.GlyphOfFeralSpirit})})},we=d.create({shield:e.LightningShield,imbueMh:a.WindfuryWeapon,imbueOh:a.FlametongueWeapon,syncType:s.Auto,totems:c.create({earth:p.StrengthOfEarthTotem,fire:r.MagmaTotem,water:m.ManaSpringTotem,air:h.WindfuryTotem})}),be=g.create({defaultPotion:S.PotionOfSpeed,flask:u.FlaskOfEndlessRage,food:I.FoodFishFeast}),Ee=f.create({giftOfTheWild:v.TristateEffectImproved,arcaneBrilliance:!0,leaderOfThePack:v.TristateEffectImproved,totemOfWrath:!0,wrathOfAirTotem:!0,moonkinAura:v.TristateEffectImproved,sanctifiedRetribution:!0,divineSpirit:!0,battleShout:v.TristateEffectImproved,demonicPactSp:500}),We=O.create({bloodFrenzy:!0,sunderArmor:!0,curseOfWeakness:v.TristateEffectRegular,curseOfElements:!0,faerieFire:v.TristateEffectImproved,judgementOfWisdom:!0,misery:!0,totemOfWrath:!0,shadowMastery:!0});const Fe=G(F.SpecEnhancementShaman,{cssClass:"enhancement-shaman-sim-ui",cssScheme:"shaman",knownIssues:[],epStats:[P.StatIntellect,P.StatAgility,P.StatStrength,P.StatAttackPower,P.StatMeleeHit,P.StatMeleeCrit,P.StatMeleeHaste,P.StatArmorPenetration,P.StatExpertise,P.StatSpellPower,P.StatSpellCrit,P.StatSpellHit,P.StatSpellHaste],epPseudoStats:[A.PseudoStatMainHandDps,A.PseudoStatOffHandDps],epReferenceStat:P.StatAttackPower,displayStats:[P.StatHealth,P.StatStamina,P.StatStrength,P.StatAgility,P.StatIntellect,P.StatAttackPower,P.StatMeleeHit,P.StatMeleeCrit,P.StatMeleeHaste,P.StatExpertise,P.StatArmorPenetration,P.StatSpellPower,P.StatSpellHit,P.StatSpellCrit,P.StatSpellHaste],defaults:{gear:ve.gear,epWeights:w.fromMap({[P.StatIntellect]:1.48,[P.StatAgility]:1.59,[P.StatStrength]:1.1,[P.StatSpellPower]:1.13,[P.StatSpellHit]:0,[P.StatSpellCrit]:.91,[P.StatSpellHaste]:.37,[P.StatAttackPower]:1,[P.StatMeleeHit]:1.38,[P.StatMeleeCrit]:.81,[P.StatMeleeHaste]:1.61,[P.StatArmorPenetration]:.48,[P.StatExpertise]:0},{[A.PseudoStatMainHandDps]:5.21,[A.PseudoStatOffHandDps]:2.21}),consumes:be,talents:Pe.data,specOptions:we,raidBuffs:Ee,partyBuffs:b.create({}),individualBuffs:E.create({blessingOfKings:!0,blessingOfWisdom:v.TristateEffectImproved,blessingOfMight:v.TristateEffectImproved,judgementsOfTheWise:!0}),debuffs:We},playerIconInputs:[Z,$,ee],includeBuffDebuffInputs:[U,q,z,_],excludeBuffDebuffInputs:[K],otherInputs:{inputs:[te,Q,J]},itemSwapSlots:[W.ItemSlotMainHand,W.ItemSlotOffHand],customSections:[Y,function(e,a){let s=new D(e,"fire-elemental-settings",{header:{title:"Fire Elemental"}}),l=y.newGroupContainer();l.classList.add("fire-elemental-icon-container"),s.bodyElement.appendChild(l);const n=x({getModObject:e=>e,getValue:e=>e.getSpecOptions().totems||c.create(),setValue:(e,t,a)=>{const s=t.getSpecOptions();s.totems=a,t.setSpecOptions(e,s),t.rotationChangeEmitter.emit(e)},changeEmitter:e=>e.specOptionsChangeEmitter},t.fromSpellId(2894),"useFireElemental");return new V(l,a.player,n),new j(s.bodyElement,a.player,{positive:!0,label:"Bonus spell power",labelTooltip:"Bonus spell power to snapshot Fire Elemental with. Will prioritize dropping Fire Elemental if greater then 0",inline:!0,getValue:e=>e.getSpecOptions().totems?.bonusSpellpower||0,setValue:(e,t,a)=>{const s=t.getSpecOptions();s.totems&&(s.totems.bonusSpellpower=a),t.setSpecOptions(e,s)},changedEvent:e=>e.specOptionsChangeEmitter}),new T(s.bodyElement,a.player,{label:"Use Tier 10 (4pc)",labelTooltip:"Will use Tier 10 (4pc) to snapshot Fire Elemental.",inline:!0,getValue:e=>e.getSpecOptions().totems?.enhTierTenBonus||!1,setValue:(e,t,a)=>{const s=t.getSpecOptions();s.totems&&(s.totems.enhTierTenBonus=a),t.setSpecOptions(e,s)},changedEvent:e=>e.currentStatsEmitter,showWhen:e=>e.getCurrentStats().sets.includes("Frost Witch's Battlegear (4pc)")}),s}],encounterPicker:{showExecuteProportion:!1},presets:{talents:[Pe,Ae],rotations:[Oe,ye,Te],gear:[me,he,ge,Se,ue,Ie,fe,ve]},autoRotation:e=>{const t=e.getCurrentStats().sets.includes("Triumphant Nobundo's Battlegear (4pc)")||e.getCurrentStats().sets.includes("Nobundo's Battlegear (4pc)")||e.getCurrentStats().sets.includes("Triumphant Thrall's Battlegear (4pc)")||e.getCurrentStats().sets.includes("Thrall's Battlegear (4pc)"),s=e.getSpecOptions();return t?(console.log("has set"),Te.rotation.rotation):s.imbueMh==a.FlametongueWeapon?Oe.rotation.rotation:ye.rotation.rotation},raidSimPresets:[{spec:F.SpecEnhancementShaman,tooltip:k[F.SpecEnhancementShaman],defaultName:"Enhancement",iconUrl:C(N.ClassShaman,1),talents:Pe.data,specOptions:we,consumes:be,defaultFactionRaces:{[l.Unknown]:H.RaceUnknown,[l.Alliance]:H.RaceDraenei,[l.Horde]:H.RaceOrc},defaultGear:{[l.Unknown]:{},[l.Alliance]:{1:he.gear,2:ge.gear,3:ue.gear,4:fe.gear},[l.Horde]:{1:he.gear,2:ge.gear,3:Ie.gear,4:fe.gear}}}]});class ke extends X{constructor(e,t){super(e,t,Fe)}}export{ke as E};
//# sourceMappingURL=sim-e50a9462.chunk.js.map
