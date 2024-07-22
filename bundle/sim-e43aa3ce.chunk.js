import{ff as e,A as t,fg as a,eW as s,aQ as l,bV as n,N as i,W as d,n as o,fh as c,F as p,dI as r,dL as m,dM as g,dN as h,aA as I,bb as u,E as S,aB as f,$ as v,a1 as A,G as T,x as O,V as y,S as P,g as G,u as D,bf as b}from"./detailed_results-f5af08fb.chunk.js";import{t as k,i as w,b as V,c as F,r as R,y as W,f as E,g as C,h as H,M as L,d as j,z as N,A as U,e as x,am as M,l as B,j as q,D as z,T as Q,al as K,n as _,I as Z}from"./preset_utils-b4a552d5.chunk.js";const $=k({fieldName:"armor",values:[{value:e.NoArmor,tooltip:"No Armor"},{actionId:t.fromSpellId(47893),value:e.FelArmor},{actionId:t.fromSpellId(47889),value:e.DemonArmor}]}),J=k({fieldName:"weaponImbue",values:[{value:a.NoWeaponImbue,tooltip:"No Weapon Stone"},{actionId:t.fromItemId(41174),value:a.GrandFirestone},{actionId:t.fromItemId(41196),value:a.GrandSpellstone}]}),X=k({fieldName:"summon",values:[{value:s.NoSummon,tooltip:"No Pet"},{actionId:t.fromSpellId(688),value:s.Imp},{actionId:t.fromSpellId(712),value:s.Succubus},{actionId:t.fromSpellId(691),value:s.Felhunter},{actionId:t.fromSpellId(30146),value:s.Felguard,showWhen:e=>e.getTalents().summonFelguard}],changeEmitter:e=>e.changeEmitter}),Y=w({fieldName:"detonateSeed",label:"Detonate Seed on Cast",labelTooltip:"Simulates raid doing damage to targets such that seed detonates immediately on cast."}),ee={items:[{id:44910,enchant:3820,gems:[41285,39998]},{id:42647,gems:[39998]},{id:34210,enchant:3810,gems:[39998,40051]},{id:41610,enchant:3722},{id:39497,enchant:3832,gems:[39998,40051]},{id:37361,enchant:2332,gems:[0]},{id:42113,enchant:3604,gems:[0]},{id:40696,gems:[40051,39998]},{id:34181,enchant:3719,gems:[39998,39998,40051]},{id:44202,enchant:3606,gems:[40026]},{id:43253,gems:[40026]},{id:37694},{id:40682},{id:37873},{id:45085,enchant:3834},{id:40698},{id:34348,gems:[39998]}]},te={items:[{id:40421,enchant:3820,gems:[41285,40051]},{id:44661,gems:[40026]},{id:40424,enchant:3810,gems:[39998]},{id:44005,enchant:3722,gems:[40026]},{id:40423,enchant:3832,gems:[39998,40051]},{id:44008,enchant:2332,gems:[39998,0]},{id:40420,enchant:3604,gems:[39998,0]},{id:40561,gems:[39998]},{id:40560,enchant:3719},{id:40558,enchant:3606},{id:40399},{id:40719},{id:40432},{id:40255},{id:40396,enchant:3834},{id:39766},{id:39712}]},ae={items:[{id:45497,enchant:3820,gems:[41285,45883]},{id:45133,gems:[40051]},{id:46068,enchant:3810,gems:[39998,40049]},{id:45618,enchant:3722,gems:[40026]},{id:46137,enchant:1144,gems:[39998,40014]},{id:45446,enchant:2332,gems:[39998,0]},{id:45665,enchant:3604,gems:[39998,39998,0]},{id:45619,enchant:3601,gems:[40051,40051,39998]},{id:46139,enchant:3872,gems:[39998,39998]},{id:45135,enchant:3606,gems:[39998,40051]},{id:45495,gems:[40026]},{id:46046,gems:[39998]},{id:45518},{id:45466},{id:45620,enchant:3834,gems:[39998]},{id:45617},{id:45294,gems:[40051]}]},se={items:[{id:47789,enchant:3820,gems:[41285,40133]},{id:47144,gems:[40155]},{id:47792,enchant:3810,gems:[40155]},{id:47552,enchant:3722,gems:[40113]},{id:47129,enchant:1144,gems:[40133,40155,40113]},{id:47208,enchant:2332,gems:[40113,0]},{id:47788,enchant:3604,gems:[40113,0]},{id:46973,enchant:3599,gems:[40133,40113,40113]},{id:47790,enchant:3872,gems:[40113,40155]},{id:47097,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40113]},{id:47237,gems:[40155]},{id:45518},{id:45466},{id:46980,enchant:3834,gems:[40113]},{id:47958,gems:[40155]},{id:45294,gems:[40155]}]},le={items:[{id:47796,enchant:3820,gems:[41285,40133]},{id:47468,gems:[40155]},{id:47793,enchant:3810,gems:[40155]},{id:47551,enchant:3722,gems:[40113]},{id:47462,enchant:1144,gems:[40133,40155,40113]},{id:47485,enchant:2332,gems:[40113,0]},{id:47797,enchant:3604,gems:[40113,0]},{id:47419,enchant:3599,gems:[40133,40113,40113]},{id:47795,enchant:3872,gems:[40113,40153]},{id:47454,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40113]},{id:47489,gems:[40155]},{id:45518},{id:45466},{id:47422,enchant:3834,gems:[40113]},{id:48032,gems:[40155]},{id:45294,gems:[40051]}]},ne={items:[{id:51231,enchant:3820,gems:[41285,40133]},{id:50724,gems:[40113]},{id:51234,enchant:3810,gems:[40155]},{id:50628,enchant:3722,gems:[40155]},{id:51233,enchant:1144,gems:[40113,40155]},{id:50651,enchant:2332,gems:[40155,0]},{id:51230,enchant:3604,gems:[40113,0]},{id:50613,gems:[40133,40113,40113]},{id:50694,enchant:3872,gems:[40113,40133,40155]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50398,gems:[40155]},{id:50664,gems:[40113]},{id:50365},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40155]}]},ie={items:[{id:44910,enchant:3820,gems:[41285,39998]},{id:42647,gems:[40049]},{id:34210,enchant:3810,gems:[39998,40014]},{id:41610,enchant:3722},{id:39497,enchant:3832,gems:[39998,40014]},{id:37361,enchant:2332,gems:[0]},{id:42113,enchant:3604,gems:[0]},{id:40696,gems:[40014,39998]},{id:34181,enchant:3719,gems:[39998,39998,40014]},{id:44202,enchant:3606,gems:[40026]},{id:43253,gems:[40026]},{id:37694},{id:40682},{id:37873},{id:45085,enchant:3834},{id:40698},{id:34348,gems:[39998]}]},de={items:[{id:40421,enchant:3820,gems:[41285,40014]},{id:44661,gems:[40099]},{id:40424,enchant:3810,gems:[40049]},{id:44005,enchant:3722,gems:[40099]},{id:40423,enchant:3832,gems:[40049,40014]},{id:44008,enchant:2332,gems:[39998,0]},{id:40420,enchant:3604,gems:[39998,0]},{id:40561,gems:[40014]},{id:40560,enchant:3719},{id:40558,enchant:3606},{id:40399},{id:40719},{id:40432},{id:40255},{id:40396,enchant:3834},{id:39766},{id:39712}]},oe={items:[{id:45497,enchant:3820,gems:[41285,45883]},{id:45243,gems:[39998]},{id:46068,enchant:3810,gems:[39998,40051]},{id:45618,enchant:3722,gems:[40026]},{id:46137,enchant:1144,gems:[39998,40051]},{id:45446,enchant:2332,gems:[39998,0]},{id:45520,enchant:3604,gems:[39998,39998,0]},{id:45619,enchant:3601,gems:[39998,39998,39998]},{id:46139,enchant:3872,gems:[39998,39998]},{id:45135,enchant:3606,gems:[39998,39998]},{id:45495,gems:[40026]},{id:45297,gems:[39998]},{id:45518},{id:45148},{id:45620,enchant:3834,gems:[39998]},{id:45617},{id:45294,gems:[39998]}]},ce={items:[{id:47789,enchant:3820,gems:[41285,40133]},{id:45243,gems:[40113]},{id:47792,enchant:3810,gems:[40153]},{id:47553,enchant:3722,gems:[40113]},{id:47791,enchant:1144,gems:[40153,40133]},{id:47208,enchant:2332,gems:[40133,0]},{id:47788,enchant:3604,gems:[40113,0]},{id:46973,enchant:3599,gems:[40133,40113,40113]},{id:47062,enchant:3872,gems:[40113,40133,40133]},{id:47097,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40133]},{id:47237,gems:[40153]},{id:45518},{id:40255},{id:46980,enchant:3834,gems:[40133]},{id:47146},{id:45294,gems:[40113]}]},pe={items:[{id:47796,enchant:3820,gems:[41285,40133]},{id:45133,gems:[40153]},{id:47793,enchant:3810,gems:[40113]},{id:47554,enchant:3722,gems:[40113]},{id:47794,enchant:1144,gems:[40113,40133]},{id:47485,enchant:2332,gems:[40133,0]},{id:47797,enchant:3604,gems:[40113,0]},{id:47419,enchant:3599,gems:[40133,40113,40113]},{id:47435,enchant:3872,gems:[40113,40133,40133]},{id:47454,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40133]},{id:47489,gems:[40113]},{id:45518},{id:40255},{id:47422,enchant:3834,gems:[40133]},{id:47470},{id:45294,gems:[40113]}]},re={items:[{id:51231,enchant:3820,gems:[41285,40133]},{id:50658,gems:[40153]},{id:51234,enchant:3810,gems:[40153]},{id:50668,enchant:3722,gems:[40133]},{id:50717,enchant:1144,gems:[40133,40113,40153]},{id:50686,enchant:2332,gems:[40133,0]},{id:51230,enchant:3604,gems:[40133,0]},{id:50702,gems:[40153,40113,40113]},{id:51232,enchant:3872,gems:[40113,40113]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50398,gems:[40153]},{id:50636,gems:[40153]},{id:50365},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50635},{id:50631,gems:[40153]}]},me={items:[{id:47789,enchant:3820,gems:[41285,40133]},{id:47144,gems:[40155]},{id:47792,enchant:3810,gems:[40155]},{id:47552,enchant:3722,gems:[40113]},{id:47129,enchant:1144,gems:[40133,40155,40113]},{id:47208,enchant:2332,gems:[40133,0]},{id:47788,enchant:3604,gems:[40113,0]},{id:46973,enchant:3599,gems:[40133,40113,40113]},{id:47790,enchant:3872,gems:[40113,40155]},{id:47205,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40133]},{id:47237,gems:[40155]},{id:45518},{id:47188},{id:46980,enchant:3834,gems:[40133]},{id:47958,gems:[40155]},{id:45294,gems:[40155]}]},ge={items:[{id:47796,enchant:3820,gems:[41285,40133]},{id:47468,gems:[40153]},{id:47793,enchant:3810,gems:[40155]},{id:47551,enchant:3722,gems:[40113]},{id:47794,enchant:1144,gems:[40113,40133]},{id:47467,enchant:2332,gems:[40153,0]},{id:47797,enchant:3604,gems:[40113,0]},{id:47419,enchant:3599,gems:[40133,40113,40113]},{id:47435,enchant:3872,gems:[40113,40133,40133]},{id:47454,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40133]},{id:47489,gems:[40155]},{id:45518},{id:47477},{id:47422,enchant:3834,gems:[40133]},{id:47437},{id:45294,gems:[40113]}]},he={items:[{id:51231,enchant:3820,gems:[41285,40133]},{id:50658,gems:[40153]},{id:51234,enchant:3810,gems:[40152]},{id:50628,enchant:3722,gems:[40152]},{id:51233,enchant:3832,gems:[40113,40155]},{id:50651,enchant:2332,gems:[40155,0]},{id:51230,enchant:3604,gems:[40113,0]},{id:50613,gems:[40133,40113,40113]},{id:50694,enchant:3719,gems:[40113,40113,40113]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50664,gems:[40113]},{id:50398,gems:[40155]},{id:50365},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40153]}]},Ie={type:"TypeAPL",prepullActions:[{action:{triggerIcd:{auraId:{spellId:71636}}},doAtValue:{const:{val:"-105s"}}},{action:{triggerIcd:{auraId:{spellId:72416}}},doAtValue:{const:{val:"-65s"}}},{action:{triggerIcd:{auraId:{spellId:55637}}},doAtValue:{const:{val:"-65s"}}},{action:{triggerIcd:{auraId:{spellId:75473}}},doAtValue:{const:{val:"-55s"}}},{action:{triggerIcd:{auraId:{spellId:64713}}},doAtValue:{const:{val:"-50s"}}},{action:{triggerIcd:{auraId:{spellId:60492}}},doAtValue:{const:{val:"-50s"}}},{action:{triggerIcd:{auraId:{spellId:60064}}},doAtValue:{const:{val:"-50s"}}},{action:{triggerIcd:{auraId:{spellId:64741}}},doAtValue:{const:{val:"-50s"}}},{action:{triggerIcd:{auraId:{spellId:60494}}},doAtValue:{const:{val:"-50s"}}},{action:{triggerIcd:{auraId:{spellId:67669}}},doAtValue:{const:{val:"-50s"}}},{action:{triggerIcd:{auraId:{itemId:50348}}},doAtValue:{const:{val:"-50s"}}},{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-23s"}}},{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-21s"}}},{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-19s"}}},{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-17s"}}},{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-15s"}}},{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-13s"}}},{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-11s"}}},{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-9s"}}},{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-7s"}}},{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-4.5s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1.65s"}}},{action:{castSpell:{spellId:{spellId:47809}}},doAtValue:{const:{val:"-1.65s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"0"}}}},castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{auraIsActive:{auraId:{spellId:70840}}},sequence:{name:"tricks",actions:[{castSpell:{spellId:{spellId:57933,tag:-1}}},{castSpell:{spellId:{itemId:50259}}}]}}},{action:{condition:{isExecutePhase:{threshold:"E35"}},resetSequence:{sequenceName:"tricks"}}},{action:{castSpell:{spellId:{spellId:10060,tag:-1}}}},{action:{condition:{auraIsActive:{auraId:{spellId:70840}}},castSpell:{spellId:{itemId:50259}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"138"}}}}]}},castSpell:{spellId:{itemId:45466}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"138"}}}}]}},castSpell:{spellId:{spellId:33697}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"138"}}}}]}},castSpell:{spellId:{itemId:45148}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"138"}}}}]}},castSpell:{spellId:{itemId:48722}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"70"}}}}]}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{or:{vals:[{and:{vals:[{isExecutePhase:{threshold:"E25"}},{or:{vals:[{auraIsActive:{auraId:{spellId:64713}}},{auraIsActive:{auraId:{itemId:50348}}},{auraIsActive:{auraId:{spellId:71636}}},{auraIsActive:{auraId:{spellId:60492}}},{auraIsActive:{auraId:{spellId:60064}}},{auraIsActive:{auraId:{spellId:64741}}},{auraIsActive:{auraId:{spellId:60494}}},{auraIsActive:{auraId:{spellId:67669}}},{auraIsActive:{auraId:{spellId:75473}}}]}}]}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"25"}}}}]}},sequence:{name:"big snap",actions:[{castSpell:{spellId:{otherId:"OtherActionPotion"}}},{castSpell:{spellId:{itemId:45466}}},{castSpell:{spellId:{spellId:33697}}},{castSpell:{spellId:{spellId:54758}}},{castSpell:{spellId:{itemId:45148}}},{castSpell:{spellId:{itemId:48722}}}]}}},{action:{sequence:{name:"opener",actions:[{castSpell:{spellId:{spellId:47813}}},{castSpell:{spellId:{spellId:59164}}},{castSpell:{spellId:{spellId:47843}}},{castSpell:{spellId:{spellId:47864}}}]}}},{action:{condition:{and:{vals:[{or:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:71572}}},rhs:{math:{op:"OpAdd",lhs:{spellCastTime:{spellId:{spellId:59164}}},rhs:{math:{op:"OpAdd",lhs:{spellTravelTime:{spellId:{spellId:59164}}},rhs:{const:{val:"2"}}}}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:60486}}},rhs:{math:{op:"OpAdd",lhs:{spellCastTime:{spellId:{spellId:59164}}},rhs:{math:{op:"OpAdd",lhs:{spellTravelTime:{spellId:{spellId:59164}}},rhs:{const:{val:"2"}}}}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:65006}}},rhs:{math:{op:"OpAdd",lhs:{spellCastTime:{spellId:{spellId:59164}}},rhs:{math:{op:"OpAdd",lhs:{spellTravelTime:{spellId:{spellId:59164}}},rhs:{const:{val:"2"}}}}}}}}]}},{isExecutePhase:{threshold:"E25"}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:59164}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:59164}}},rhs:{math:{op:"OpAdd",lhs:{spellCastTime:{spellId:{spellId:59164}}},rhs:{math:{op:"OpAdd",lhs:{spellTravelTime:{spellId:{spellId:59164}}},rhs:{const:{val:"2"}}}}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:59164}}}},{action:{condition:{and:{vals:[{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:63321}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:63321}}},rhs:{const:{val:"2"}}}}]}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"27"}}}}]}},castSpell:{spellId:{spellId:57946}}}},{action:{condition:{warlockShouldRefreshCorruption:{}},castSpell:{spellId:{spellId:47813}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:47843}}},rhs:{spellCastTime:{spellId:{spellId:47843}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"10"}}}}]}},castSpell:{spellId:{spellId:47843}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"64"}}}},castSpell:{spellId:{spellId:1122}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:47864}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"22"}}}}]}},castSpell:{spellId:{spellId:47864}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{remainingTimePercent:{}},rhs:{const:{val:"27%"}}}},{not:{val:{isExecutePhase:{threshold:"E25"}}}}]}},sequence:{name:"lifetap",actions:[{castSpell:{spellId:{spellId:57946}}}]}}},{action:{condition:{warlockShouldRecastDrainSoul:{}},channelSpell:{spellId:{spellId:47855},interruptIf:{}}}},{action:{condition:{isExecutePhase:{threshold:"E25"}},channelSpell:{spellId:{spellId:47855},interruptIf:{const:{val:"True"}}}}},{action:{castSpell:{spellId:{spellId:47809}}}},{action:{castSpell:{spellId:{spellId:57946}}}}]},ue={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-4s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:47809}}},doAtValue:{const:{val:"-2.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:50589}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"60s"}}}},castSpell:{spellId:{spellId:47867}}}},{action:{multidot:{spellId:{spellId:47813},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:47867}}}}},{not:{val:{dotIsActive:{spellId:{spellId:47864}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"22s"}}}}]}},castSpell:{spellId:{spellId:47864}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:63321}}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:57946}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:47811}}},rhs:{spellCastTime:{spellId:{spellId:47811}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"12s"}}}}]}},castSpell:{spellId:{spellId:47811}}}},{action:{condition:{auraIsActive:{auraId:{spellId:63167}}},castSpell:{spellId:{spellId:47825}}}},{action:{condition:{auraIsActive:{auraId:{spellId:71165}}},castSpell:{spellId:{spellId:47838}}}},{action:{castSpell:{spellId:{spellId:47809}}}},{action:{castSpell:{spellId:{spellId:57946}}}}]},Se={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:57946}}},doAtValue:{const:{val:"-5s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-3.5s"}}},{action:{castSpell:{spellId:{spellId:47825}}},doAtValue:{const:{val:"-3.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:17962}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"60s"}}}},castSpell:{spellId:{spellId:47867}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:47811}}},rhs:{spellCastTime:{spellId:{spellId:47811}}}}},castSpell:{spellId:{spellId:47811}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"61s"}}}},castSpell:{spellId:{spellId:1122}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:63321}}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:57946}}}},{action:{castSpell:{spellId:{spellId:59172}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:47867}}}}},{not:{val:{dotIsActive:{spellId:{spellId:47864}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"22s"}}}}]}},castSpell:{spellId:{spellId:47864}}}},{action:{castSpell:{spellId:{spellId:47838}}}},{action:{castSpell:{spellId:{spellId:57946}}}}]},fe="This gear preset is inspired from Zephan's Affliction guide: https://www.warcrafttavern.com/wotlk/guides/pve-affliction-warlock/",ve=V("Straight Outa SWP",{items:[{id:34340,enchant:3002,gems:[34220,32215]},{id:34204},{id:31054,enchant:2982,gems:[32215,35760]},{id:34242,enchant:2621,gems:[32196]},{id:34364,enchant:2661,gems:[32196,35488,32196]},{id:34436,enchant:2650,gems:[35760,0]},{id:34344,enchant:2937,gems:[35760,32196,0]},{id:34541,gems:[35760,0]},{id:34181,enchant:2748,gems:[32196,32196,35760]},{id:34564,enchant:2940,gems:[35760]},{id:34362,enchant:2928},{id:34230,enchant:2928},{id:32483},{id:34429},{id:34336,enchant:2672},{id:34179},{id:34347,gems:[35760]}]}),Ae=V("Preraid Affliction",ee,{tooltip:fe,talentTree:0}),Te=V("P1 Affliction",te,{tooltip:fe,talentTree:0}),Oe=V("P2 Affliction",ae,{tooltip:fe,talentTree:0}),ye=V("P3 Affliction [A]",se,{tooltip:fe,talentTree:0,faction:l.Alliance}),Pe=V("P3 Affliction [H]",le,{tooltip:fe,talentTree:0,faction:l.Horde}),Ge=V("P4 Affliction",ne,{tooltip:fe,talentTree:0}),De=V("Preraid Demo/Destro",ie,{tooltip:fe,talentTrees:[1,2]}),be=V("P1 Demo/Destro",de,{tooltip:fe,talentTrees:[1,2]}),ke=V("P2 Demo/Destro",oe,{tooltip:fe,talentTrees:[1,2]}),we=V("P3 Demo [A]",ce,{tooltip:fe,talentTree:1,faction:l.Alliance}),Ve=V("P3 Demo [H]",pe,{tooltip:fe,talentTree:1,faction:l.Horde}),Fe=V("P4 Demo",re,{tooltip:fe,talentTree:1}),Re=V("P3 Destro [A]",me,{tooltip:fe,talentTree:2,faction:l.Alliance}),We=V("P3 Destro [H]",ge,{tooltip:fe,talentTree:2,faction:l.Horde}),Ee=V("P4 Destro",he,{tooltip:fe,talentTree:2}),Ce=F("Affliction",Ie,{talentTree:0}),He=F("Demo",ue,{talentTree:1}),Le=F("Destro",Se,{talentTree:2}),je={name:"Affliction",data:n.create({talentsString:"2350002030023510253500331151--550000051",glyphs:i.create({major1:d.GlyphOfQuickDecay,major2:d.GlyphOfLifeTap,major3:d.GlyphOfHaunt,minor1:o.GlyphOfSouls,minor2:o.GlyphOfDrainSoul,minor3:o.GlyphOfSubjugateDemon})})},Ne={name:"Demonology",data:n.create({talentsString:"-203203301035012530135201351-550000052",glyphs:i.create({major1:d.GlyphOfLifeTap,major2:d.GlyphOfQuickDecay,major3:d.GlyphOfFelguard,minor1:o.GlyphOfSouls,minor2:o.GlyphOfDrainSoul,minor3:o.GlyphOfSubjugateDemon})})},Ue={name:"Destruction",data:n.create({talentsString:"-03310030003-05203205210331051335230351",glyphs:i.create({major1:d.GlyphOfConflagrate,major2:d.GlyphOfLifeTap,major3:d.GlyphOfIncinerate,minor1:o.GlyphOfSouls,minor2:o.GlyphOfDrainSoul,minor3:o.GlyphOfSubjugateDemon})})},xe=c.create({armor:e.FelArmor,summon:s.Felhunter,weaponImbue:a.GrandSpellstone,detonateSeed:!0}),Me=c.create({armor:e.FelArmor,summon:s.Felguard,weaponImbue:a.GrandSpellstone,detonateSeed:!0}),Be=c.create({armor:e.FelArmor,summon:s.Imp,weaponImbue:a.GrandFirestone,detonateSeed:!0}),qe=p.create({flask:r.FlaskOfTheFrostWyrm,food:m.FoodFishFeast,petFood:g.PetFoodSpicedMammothTreats,defaultPotion:h.PotionOfWildMagic,prepopPotion:h.PotionOfWildMagic}),ze=I.create({giftOfTheWild:u.TristateEffectImproved,powerWordFortitude:u.TristateEffectImproved,strengthOfEarthTotem:u.TristateEffectImproved,arcaneBrilliance:!0,divineSpirit:!0,trueshotAura:!0,leaderOfThePack:u.TristateEffectImproved,icyTalons:!0,totemOfWrath:!0,moonkinAura:u.TristateEffectImproved,wrathOfAirTotem:!0,sanctifiedRetribution:!0,bloodlust:!0,demonicPactSp:500}),Qe=S.create({blessingOfKings:!0,blessingOfWisdom:u.TristateEffectImproved,blessingOfMight:u.TristateEffectImproved,vampiricTouch:!0});S.create({blessingOfKings:!0,blessingOfWisdom:u.TristateEffectImproved,blessingOfMight:u.TristateEffectImproved});const Ke=f.create({sunderArmor:!0,faerieFire:u.TristateEffectImproved,bloodFrenzy:!0,ebonPlaguebringer:!0,heartOfTheCrusader:!0,judgementOfWisdom:!0});f.create({sunderArmor:!0,faerieFire:u.TristateEffectImproved,bloodFrenzy:!0,ebonPlaguebringer:!0,heartOfTheCrusader:!0,judgementOfWisdom:!0,shadowMastery:!0});const _e={distanceFromTarget:25,profession1:v.Engineering,profession2:v.Tailoring,channelClipDelay:150,nibelungAverageCasts:11},Ze=R(P.SpecWarlock,{cssClass:"warlock-sim-ui",cssScheme:"warlock",knownIssues:["Drain Soul is currently disabled for APL rotations"],epStats:[A.StatIntellect,A.StatSpirit,A.StatSpellPower,A.StatSpellHit,A.StatSpellCrit,A.StatSpellHaste,A.StatStamina],epReferenceStat:A.StatSpellPower,displayStats:[A.StatHealth,A.StatIntellect,A.StatSpirit,A.StatSpellPower,A.StatSpellHit,A.StatSpellCrit,A.StatSpellHaste,A.StatMP5,A.StatStamina],defaults:{gear:Pe.gear,epWeights:T.fromMap({[A.StatIntellect]:.18,[A.StatSpirit]:.54,[A.StatSpellPower]:1,[A.StatSpellHit]:.93,[A.StatSpellCrit]:.53,[A.StatSpellHaste]:.81,[A.StatStamina]:.01}),consumes:qe,talents:je.data,specOptions:xe,raidBuffs:ze,partyBuffs:O.create({}),individualBuffs:Qe,debuffs:Ke,other:_e},playerIconInputs:[X,$,J],includeBuffDebuffInputs:[W,E,C,H,L,j,N,U,x,M,B],excludeBuffDebuffInputs:[],petConsumeInputs:[q],otherInputs:{inputs:[Y,z,Q,K,_]},itemSwapSlots:[y.ItemSlotMainHand,y.ItemSlotOffHand,y.ItemSlotRanged],encounterPicker:{showExecuteProportion:!1},presets:{talents:[je,Ne,Ue],rotations:[Ce,He,Le],gear:[ve,Ae,Te,Oe,ye,Pe,Ge,De,be,ke,we,Ve,Fe,Re,We,Ee]},autoRotation:e=>{const t=e.getTalentTree();return 0==t?Ce.rotation.rotation:1==t?He.rotation.rotation:Le.rotation.rotation},raidSimPresets:[{spec:P.SpecWarlock,tooltip:"Affliction Warlock",defaultName:"Affliction",iconUrl:G(D.ClassWarlock,0),talents:je.data,specOptions:xe,consumes:qe,defaultFactionRaces:{[l.Unknown]:b.RaceUnknown,[l.Alliance]:b.RaceHuman,[l.Horde]:b.RaceOrc},defaultGear:{[l.Unknown]:{},[l.Alliance]:{1:Te.gear,2:Oe.gear,3:ye.gear,4:Ge.gear},[l.Horde]:{1:Te.gear,2:Oe.gear,3:Pe.gear,4:Ge.gear}},otherDefaults:_e},{spec:P.SpecWarlock,tooltip:"Demonology Warlock",defaultName:"Demonology",iconUrl:G(D.ClassWarlock,1),talents:Ne.data,specOptions:Me,consumes:qe,defaultFactionRaces:{[l.Unknown]:b.RaceUnknown,[l.Alliance]:b.RaceHuman,[l.Horde]:b.RaceOrc},defaultGear:{[l.Unknown]:{},[l.Alliance]:{1:be.gear,2:ke.gear,3:we.gear,4:Fe.gear},[l.Horde]:{1:be.gear,2:ke.gear,3:Ve.gear,4:Fe.gear}},otherDefaults:_e},{spec:P.SpecWarlock,tooltip:"Destruction Warlock",defaultName:"Destruction",iconUrl:G(D.ClassWarlock,2),talents:Ue.data,specOptions:Be,consumes:qe,defaultFactionRaces:{[l.Unknown]:b.RaceUnknown,[l.Alliance]:b.RaceHuman,[l.Horde]:b.RaceOrc},defaultGear:{[l.Unknown]:{},[l.Alliance]:{1:be.gear,2:ke.gear,3:Re.gear,4:Ee.gear},[l.Horde]:{1:be.gear,2:ke.gear,3:We.gear,4:Ee.gear}},otherDefaults:_e}]});class $e extends Z{constructor(e,t){super(e,t,Ze)}}export{$e as W};
//# sourceMappingURL=sim-e43aa3ce.chunk.js.map
