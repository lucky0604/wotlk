var e=Object.defineProperty,s=(s,t,a)=>(((s,t,a)=>{t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a})(s,"symbol"!=typeof t?t+"":t,a),a);import{A as t,eP as a,aQ as l,bV as n,N as i,o as d,p as c,fe as o,F as p,dI as r,dL as m,dN as h,a1 as g,ac as I,G as u,a4 as S,aA as v,bb as f,x as T,E as O,aB as A,S as y,g as G,u as R,bf as b}from"./detailed_results-f5af08fb.chunk.js";import{m as P,a as E,i as x,t as w,b as H,c as k,r as C,k as V,W as F,T as W,s as L,I as M}from"./preset_utils-b4a552d5.chunk.js";import{P as N}from"./suggest_gems_action-fb7d04c1.chunk.js";const U=P({fieldName:"useRecklessness",id:t.fromSpellId(1719)}),q=P({fieldName:"useShatteringThrow",id:t.fromSpellId(64382)}),j=E({fieldName:"startingRage",label:"Starting Rage",labelTooltip:"Initial rage at the start of each iteration."}),D=x({fieldName:"stanceSnapshot",label:"Stance Snapshot",labelTooltip:"Ability that is cast at the same time as stance swap will benefit from the bonus of the stance before the swap."}),B=x({fieldName:"disableExpertiseGemming",label:"Disable expertise gemming",labelTooltip:"Disables auto gemming for expertise"}),_=w({fieldName:"shout",values:[{color:"c79c6e",value:a.WarriorShoutNone},{actionId:t.fromSpellId(2048),value:a.WarriorShoutBattle},{actionId:t.fromSpellId(469),value:a.WarriorShoutCommanding}]}),z={items:[{id:40528,enchant:3817,gems:[41398,42153]},{id:44664,gems:[39996]},{id:40530,enchant:3808,gems:[40038]},{id:40403,enchant:3605},{id:40539,enchant:3832,gems:[42153]},{id:40330,enchant:3845,gems:[40002,0]},{id:40541,enchant:3604,gems:[0]},{id:40205,gems:[42153]},{id:40318,enchant:3823,gems:[49110,40038]},{id:40591,enchant:3606},{id:43993,gems:[40002]},{id:40474},{id:42987},{id:40256},{id:40384,enchant:3789},{},{id:40385}]},K={items:[{id:46151,enchant:3817,gems:[41398,42142]},{id:45459,gems:[40002]},{id:46149,enchant:3808,gems:[42153]},{id:46032,enchant:3605,gems:[39996,40037]},{id:46146,enchant:3832,gems:[42153,39996]},{id:45663,enchant:3845,gems:[39996,0]},{id:46148,enchant:3604,gems:[40037,0]},{id:45241,gems:[49110,40037,39996]},{id:45536,enchant:3823,gems:[39996,39996,39996]},{id:45599,enchant:3606,gems:[40002,40002]},{id:45608,gems:[39996]},{id:46322,gems:[39996]},{id:46038},{id:45931},{id:45533,enchant:3789,gems:[39996,39996]},{},{id:45296,gems:[39996]}]},Q={items:[{id:49478,enchant:3817,gems:[41398,40117]},{id:47915,gems:[40117]},{id:48381,enchant:3808,gems:[42142]},{id:47545,enchant:3605,gems:[40117]},{id:48385,enchant:3832,gems:[42142,42142]},{id:47074,enchant:3845,gems:[40143,0]},{id:47240,enchant:3604,gems:[49110,40117,0]},{id:47153,gems:[40143,40117,40117]},{id:47191,enchant:3823,gems:[40117,40117,40117]},{id:47077,enchant:3606,gems:[40143,40117]},{id:47934,gems:[40142]},{id:45608,gems:[40117]},{id:47131},{id:46038},{id:47078,enchant:3789,gems:[40117,40117]},{},{id:45296,gems:[40117]}]},J={items:[{id:48383,enchant:3817,gems:[41398,40117]},{id:47915,gems:[40117]},{id:48381,enchant:3808,gems:[42153]},{id:47545,enchant:3605,gems:[40117]},{id:48385,enchant:3832,gems:[42153,42153]},{id:47074,enchant:3845,gems:[40117,0]},{id:47240,enchant:3604,gems:[49110,40117,0]},{id:47153,gems:[40117,40117,40117]},{id:48382,enchant:3823,gems:[40142,40117]},{id:47077,enchant:3606,gems:[40117,40117]},{id:47934,gems:[40117]},{id:45608,gems:[40117]},{id:46038},{id:47131},{id:47078,enchant:3789,gems:[40117,40117]},{},{id:46995,gems:[40117]}]},X={items:[{id:49478,enchant:3817,gems:[41398,40111]},{id:45459,gems:[40111]},{id:48400,enchant:3808,gems:[42153]},{id:47546,enchant:3605,gems:[40111]},{id:48396,enchant:3832,gems:[42153,42153]},{id:47442,enchant:3845,gems:[40143,0]},{id:47492,enchant:3604,gems:[49110,40117,0]},{id:47472,gems:[40143,40117,40117]},{id:47480,enchant:3823,gems:[40117,40117,40117]},{id:47445,enchant:3606,gems:[40143,40117]},{id:48007,gems:[40143]},{id:45608,gems:[40117]},{id:47464},{id:46038},{id:47446,enchant:3789,gems:[40111,40111]},{},{id:47428,gems:[40111]}]},Y={items:[{id:48398,enchant:3817,gems:[41398,40117]},{id:47988,gems:[40117]},{id:48400,enchant:3808,gems:[42153]},{id:47546,enchant:3605,gems:[40117]},{id:48396,enchant:3832,gems:[42153,42153]},{id:47442,enchant:3845,gems:[40117,0]},{id:47492,enchant:3604,gems:[49110,40117,0]},{id:47472,gems:[40117,40117,40117]},{id:48399,enchant:3823,gems:[40142,40117]},{id:47445,enchant:3606,gems:[40117,40117]},{id:48007,gems:[40117]},{id:45608,gems:[40117]},{id:46038},{id:47464},{id:47446,enchant:3789,gems:[40117,40117]},{},{id:47428,gems:[40117]}]},Z={items:[{id:51227,enchant:3817,gems:[41398,40111]},{id:50728,gems:[40143]},{id:51229,enchant:3808,gems:[40111]},{id:47545,enchant:3605,gems:[40111]},{id:51225,enchant:3832,gems:[40111,49110]},{id:50670,enchant:3845,gems:[40143,0]},{id:51226,enchant:3604,gems:[40125,0]},{id:50707,gems:[40117,40117,40117]},{id:50645,enchant:3823,gems:[42153,42153,42142]},{id:50607,enchant:3606,gems:[40125,40125]},{id:50402,gems:[40143]},{id:50618,gems:[40117]},{id:50343},{id:50363},{id:49623,enchant:3789,gems:[40111,40111,40111]},{},{id:50733,enchant:3608,gems:[40111]}]},$={items:[{id:51227,enchant:3817,gems:[41398,40111]},{id:50728,gems:[40125]},{id:51229,enchant:3808,gems:[40111]},{id:47546,enchant:3605,gems:[40111]},{id:51225,enchant:3832,gems:[40111,49110]},{id:50670,enchant:3845,gems:[40125,0]},{id:51226,enchant:3604,gems:[40125,0]},{id:50707,gems:[40117,40117,40117]},{id:50645,enchant:3823,gems:[42153,42153,42142]},{id:50607,enchant:3606,gems:[40125,40125]},{id:50402,gems:[40125]},{id:50618,gems:[40117]},{id:47131},{id:50363},{id:49623,enchant:3789,gems:[40111,40111,40111]},{},{id:50733,enchant:3608,gems:[40111]}]},ee={items:[{id:41386,enchant:3817,gems:[41398,42702]},{id:42645,gems:[40003]},{id:44195,enchant:3808},{id:37647,enchant:3605},{id:39606,enchant:3832,gems:[40003,40003]},{id:44203,enchant:3845,gems:[0]},{id:39609,enchant:3604,gems:[40037,0]},{id:40694,gems:[42149,42149]},{id:44205,enchant:3823},{id:44306,enchant:3606,gems:[40037,40037]},{id:42642,gems:[42149]},{id:37642},{id:42987},{id:40684},{id:37852,enchant:3789},{id:37852,enchant:3789},{id:37191}]},se={items:[{id:44006,enchant:3817,gems:[41285,42702]},{id:44664,gems:[39996]},{id:40530,enchant:3808,gems:[40037]},{id:40403,enchant:3605},{id:40539,enchant:3832,gems:[42142]},{id:39765,enchant:3845,gems:[39996,0]},{id:40541,enchant:3604,gems:[0]},{id:40205,gems:[42142]},{id:40529,enchant:3823,gems:[39996,40022]},{id:40591,enchant:3606},{id:43993,gems:[42142]},{id:40717},{id:42987},{id:40256},{id:40384,enchant:3789},{id:40384,enchant:3789},{id:40385}]},te={items:[{id:46151,enchant:3817,gems:[41398,39996]},{id:45517,gems:[39996]},{id:46149,enchant:3808,gems:[39996]},{id:46032,enchant:3605,gems:[39996,40037]},{id:46146,enchant:3832,gems:[39996,42702]},{id:45611,enchant:3845,gems:[40037,0]},{id:46148,enchant:3604,gems:[40058]},{id:46095,gems:[42154,42142,42142]},{id:45536,enchant:3823,gems:[39996,39996,39996]},{id:40591,enchant:3606},{id:45608,gems:[39996]},{id:45534,gems:[39996]},{id:42987},{id:45931},{id:45516,enchant:3789,gems:[39996,39996]},{id:45516,enchant:3789,gems:[39996,39996]},{id:45296,gems:[39996]}]},ae={items:[{id:48383,enchant:3817,gems:[41398,49110]},{id:47060,gems:[40117]},{id:48381,enchant:3808,gems:[40111]},{id:47545,enchant:3831,gems:[40111]},{id:48385,enchant:3832,gems:[40117,40117]},{id:47074,enchant:3845,gems:[40143,0]},{id:47240,enchant:3604,gems:[40111,40111,0]},{id:47002,gems:[40143,40143,40111]},{id:48382,enchant:3823,gems:[40142,40117]},{id:47154,enchant:3606,gems:[40142,40117]},{id:46966,gems:[40143]},{id:47075,gems:[40111]},{id:45931},{id:47131},{id:47078,enchant:3789,gems:[42142,40111]},{id:47078,enchant:3789,gems:[42142,42142]},{id:46995,gems:[40111]}]},le={items:[{id:48398,enchant:3817,gems:[41398,49110]},{id:47433,gems:[40111]},{id:48400,enchant:3808,gems:[40117]},{id:47546,enchant:3831,gems:[40111]},{id:48396,enchant:3832,gems:[40111,40111]},{id:47414,enchant:3845,gems:[40142,0]},{id:47240,enchant:3604,gems:[40111,40111,0]},{id:47429,gems:[40142,40142,42142]},{id:48399,enchant:3823,gems:[40142,40111]},{id:47445,enchant:3606,gems:[40142,45862]},{id:47413,gems:[40142]},{id:47443,gems:[40111]},{id:45931},{id:47464},{id:47446,enchant:3789,gems:[40117,40117]},{id:47446,enchant:3789,gems:[42142,42142]},{id:47428,gems:[40117]}]},ne={items:[{id:51227,enchant:3817,gems:[41398,40117]},{id:50633,gems:[40117]},{id:51229,enchant:3808,gems:[40117]},{id:47545,enchant:3831,gems:[40117]},{id:51225,enchant:3832,gems:[40117,49110]},{id:50670,enchant:3845,gems:[42156,0]},{id:50675,enchant:3604,gems:[40143,40117,0]},{id:50620,gems:[40143,40111,40111]},{id:51228,enchant:3823,gems:[40111,40111]},{id:50639,enchant:3606,gems:[40143,40117]},{id:50618,gems:[40117]},{id:50402,gems:[40143]},{id:50343},{id:50363},{id:49623,enchant:3789,gems:[40111,42153,42153]},{id:50730,enchant:3789,gems:[40117,40117,40117]},{id:50733,gems:[40111]}]},ie={items:[{id:51227,enchant:3817,gems:[41398,40117]},{id:50633,gems:[40117]},{id:51229,enchant:3808,gems:[40117]},{id:47546,enchant:3831,gems:[40117]},{id:51225,enchant:3832,gems:[40117,49110]},{id:50670,enchant:3845,gems:[40125,0]},{id:50675,enchant:3604,gems:[40143,40117,0]},{id:50620,gems:[40125,40117,40117]},{id:51228,enchant:3823,gems:[40111,40111]},{id:50639,enchant:3606,gems:[42156,40143]},{id:50618,gems:[40117]},{id:50402,gems:[40143]},{id:50343},{id:50363},{id:49623,enchant:3789,gems:[40117,42153,42153]},{id:50730,enchant:3789,gems:[40117,40111,40111]},{id:50733,gems:[40111]}]},de={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2458}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{spellId:2687}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:18499}}},doAtValue:{const:{val:"-5s"}}},{action:{castSpell:{spellId:{spellId:1719}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:12292}}},doAtValue:{const:{val:"-1.5s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:2458}}},{cmp:{op:"OpLe",lhs:{currentRage:{}},rhs:{const:{val:"20"}}}}]}},castSpell:{spellId:{spellId:2687}}}},{hide:!0,action:{condition:{auraShouldRefresh:{auraId:{spellId:47467},maxOverlap:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:47467}}}},{action:{condition:{auraIsActive:{auraId:{spellId:12292}}},castSpell:{spellId:{itemId:40211}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"12"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47520,tag:1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"12"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47450,tag:1}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:1680}}}},{action:{castSpell:{spellId:{spellId:23881}}}},{action:{castSpell:{spellId:{spellId:1680}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"6s"}}}},castSpell:{spellId:{spellId:64382}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{or:{vals:[{auraIsActive:{auraId:{spellId:46916}}},{auraIsActive:{auraId:{spellId:70847}}}]}}]}},castSpell:{spellId:{spellId:47475}}}},{hide:!0,action:{condition:{auraShouldRefresh:{auraId:{spellId:47467},maxOverlap:{const:{val:"8s"}}}},castSpell:{spellId:{spellId:47467}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{spellId:47471}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{dotIsActive:{spellId:{spellId:47465}}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23881}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:2457}}},{castSpell:{spellId:{spellId:47465}}},{castSpell:{spellId:{spellId:2458}}}]}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{auraIsActive:{auraId:{spellId:68051}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23881}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:2457}}},{castSpell:{spellId:{spellId:7384}}},{castSpell:{spellId:{spellId:2458}}}]}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23881}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}}]}},castSpell:{spellId:{spellId:57755}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:2458}}}}},castSpell:{spellId:{spellId:2458}}}}]},ce={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2458}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{spellId:2687}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:18499}}},doAtValue:{const:{val:"-5s"}}},{action:{castSpell:{spellId:{spellId:1719}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:12292}}},doAtValue:{const:{val:"-1.5s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:2458}}},{cmp:{op:"OpLe",lhs:{currentRage:{}},rhs:{const:{val:"20"}}}}]}},castSpell:{spellId:{spellId:2687}}}},{action:{condition:{and:{vals:[{auraShouldRefresh:{auraId:{spellId:47467},maxOverlap:{const:{val:"3s"}}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8647}}}}}]}},castSpell:{spellId:{spellId:47467}}}},{action:{condition:{auraIsActive:{auraId:{spellId:12292}}},castSpell:{spellId:{itemId:40211}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"12"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47520,tag:1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"12"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47450,tag:1}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:1680}}}},{action:{castSpell:{spellId:{spellId:23881}}}},{action:{castSpell:{spellId:{spellId:1680}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"6s"}}}},castSpell:{spellId:{spellId:64382}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{or:{vals:[{auraIsActive:{auraId:{spellId:46916}}},{auraIsActive:{auraId:{spellId:70847}}}]}}]}},castSpell:{spellId:{spellId:47475}}}},{action:{condition:{and:{vals:[{auraShouldRefresh:{auraId:{spellId:47467},maxOverlap:{const:{val:"8s"}}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8647}}}}}]}},castSpell:{spellId:{spellId:47467}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{spellId:47471}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{dotIsActive:{spellId:{spellId:47465}}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23881}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:2457}}},{castSpell:{spellId:{spellId:47465}}},{castSpell:{spellId:{spellId:2458}}}]}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{auraIsActive:{auraId:{spellId:68051}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23881}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:2457}}},{castSpell:{spellId:{spellId:7384}}},{castSpell:{spellId:{spellId:2458}}}]}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23881}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}}]}},castSpell:{spellId:{spellId:57755}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:2458}}}}},castSpell:{spellId:{spellId:2458}}}}]},oe={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2687}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:1719}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:2457}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentRage:{}},rhs:{const:{val:"20"}}}},castSpell:{spellId:{spellId:2687}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"35"}}}},{cmp:{op:"OpLe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1ms"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47520,tag:1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"40"}}}},{cmp:{op:"OpLe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1ms"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47450,tag:1}}}},{hide:!0,action:{condition:{auraShouldRefresh:{auraId:{spellId:47467},maxOverlap:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:47467}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:47465}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"7s"}}}}]}},castSpell:{spellId:{spellId:47465}}}},{action:{condition:{auraIsActive:{auraId:{spellId:68051}}},castSpell:{spellId:{spellId:7384}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"3.5s"}}}},castSpell:{spellId:{spellId:46924}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"30"}}}},castSpell:{spellId:{spellId:47486}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"15"}}}},castSpell:{spellId:{spellId:47471}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"15"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47502}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"15"}}}},castSpell:{spellId:{spellId:47475}}}}]},pe={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2687}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:1719}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:2457}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentRage:{}},rhs:{const:{val:"20"}}}},castSpell:{spellId:{spellId:2687}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"35"}}}},{cmp:{op:"OpLe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1ms"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47520,tag:1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"40"}}}},{cmp:{op:"OpLe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1ms"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47450,tag:1}}}},{action:{condition:{and:{vals:[{auraShouldRefresh:{auraId:{spellId:47467},maxOverlap:{const:{val:"3s"}}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8647}}}}}]}},castSpell:{spellId:{spellId:47467}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:47465}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"7s"}}}}]}},castSpell:{spellId:{spellId:47465}}}},{action:{condition:{auraIsActive:{auraId:{spellId:68051}}},castSpell:{spellId:{spellId:7384}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"3.5s"}}}},castSpell:{spellId:{spellId:46924}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"30"}}}},castSpell:{spellId:{spellId:47486}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"15"}}}},castSpell:{spellId:{spellId:47471}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"15"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47502}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"15"}}}},castSpell:{spellId:{spellId:47475}}}}]},re=H("Preraid Arms",{items:[{id:41386,enchant:3817,gems:[41285,42702]},{id:42645,gems:[40002]},{id:44195,enchant:3808},{id:37647,enchant:3605},{id:39606,enchant:3832,gems:[40002,40002]},{id:41355,enchant:3845,gems:[0]},{id:39609,enchant:3604,gems:[40037,0]},{id:40694,gems:[42149,42149]},{id:37193,enchant:3823,gems:[40002,40037]},{id:44306,enchant:3606,gems:[40086,40002]},{id:42642,gems:[42149]},{id:37642},{id:42987},{id:40684},{id:37852,enchant:3789},{},{id:37191}]},{talentTree:0}),me=H("P1 Arms",z,{talentTree:0}),he=H("P2 Arms",K,{talentTree:0}),ge=H("P3 Arms 2p [A]",Q,{talentTree:0,faction:l.Alliance}),Ie=H("P3 Arms 4p [A]",J,{talentTree:0,faction:l.Alliance}),ue=H("P3 Arms 2p [H]",X,{talentTree:0,faction:l.Horde}),Se=H("P3 Arms 4p [H]",Y,{talentTree:0,faction:l.Horde}),ve=H("P4 Arms [A]",Z,{talentTree:0,faction:l.Alliance}),fe=H("P4 Arms [H]",$,{talentTree:0,faction:l.Horde}),Te=H("Preraid Fury",ee,{talentTrees:[1,2]}),Oe=H("P1 Fury",se,{talentTrees:[1,2]}),Ae=H("P2 Fury",te,{talentTrees:[1,2]}),ye=H("P3 Fury [A]",ae,{talentTrees:[1,2],faction:l.Alliance}),Ge=H("P3 Fury [H]",le,{talentTrees:[1,2],faction:l.Horde}),Re=H("P4 Fury [A]",ne,{talentTrees:[1,2],faction:l.Alliance}),be=H("P4 Fury [H]",ie,{talentTrees:[1,2],faction:l.Horde}),Pe=k("Fury",de,{talentTree:1}),Ee=k("Fury + Sunder",ce,{talentTree:1}),xe=k("Arms",oe,{talentTree:0}),we=k("Arms + Sunder",pe,{talentTree:0}),He={name:"Arms",data:n.create({talentsString:"3022032023335100102012213231251-305-2033",glyphs:i.create({major1:d.GlyphOfRending,major2:d.GlyphOfMortalStrike,major3:d.GlyphOfExecution,minor1:c.GlyphOfThunderClap,minor2:c.GlyphOfCommand,minor3:c.GlyphOfShatteringThrow})})},ke={name:"Fury",data:n.create({talentsString:"32002301233-305053000520310053120500351",glyphs:i.create({major1:d.GlyphOfWhirlwind,major2:d.GlyphOfHeroicStrike,major3:d.GlyphOfExecution,minor1:c.GlyphOfCommand,minor2:c.GlyphOfShatteringThrow,minor3:c.GlyphOfCharge})})},Ce=o.create({startingRage:0,useRecklessness:!0,useShatteringThrow:!0,disableExpertiseGemming:!1,shout:a.WarriorShoutCommanding}),Ve=p.create({flask:r.FlaskOfEndlessRage,food:m.FoodSpicedWormBurger,defaultPotion:h.IndestructiblePotion,prepopPotion:h.PotionOfSpeed}),Fe=C(y.SpecWarrior,{cssClass:"warrior-sim-ui",cssScheme:"warrior",knownIssues:[],epStats:[g.StatStrength,g.StatAgility,g.StatAttackPower,g.StatExpertise,g.StatMeleeHit,g.StatMeleeCrit,g.StatMeleeHaste,g.StatArmorPenetration,g.StatArmor],epPseudoStats:[I.PseudoStatMainHandDps,I.PseudoStatOffHandDps],epReferenceStat:g.StatAttackPower,displayStats:[g.StatHealth,g.StatStamina,g.StatStrength,g.StatAgility,g.StatAttackPower,g.StatExpertise,g.StatMeleeHit,g.StatMeleeCrit,g.StatMeleeHaste,g.StatArmorPenetration,g.StatArmor],modifyDisplayStats:e=>{let s=new u;return e.getInFrontOfTarget()||(s=s.addStat(g.StatExpertise,4*e.getTalents().weaponMastery*S)),{talents:s}},defaults:{gear:ye.gear,epWeights:u.fromMap({[g.StatStrength]:2.72,[g.StatAgility]:1.82,[g.StatAttackPower]:1,[g.StatExpertise]:2.55,[g.StatMeleeHit]:.79,[g.StatMeleeCrit]:2.12,[g.StatMeleeHaste]:1.72,[g.StatArmorPenetration]:2.17,[g.StatArmor]:.03},{[I.PseudoStatMainHandDps]:6.29,[I.PseudoStatOffHandDps]:3.58}),consumes:Ve,talents:ke.data,specOptions:Ce,raidBuffs:v.create({giftOfTheWild:f.TristateEffectImproved,swiftRetribution:!0,strengthOfEarthTotem:f.TristateEffectImproved,icyTalons:!0,abominationsMight:!0,leaderOfThePack:f.TristateEffectRegular,sanctifiedRetribution:!0,bloodlust:!0,devotionAura:f.TristateEffectImproved,stoneskinTotem:f.TristateEffectImproved}),partyBuffs:T.create({heroicPresence:!1}),individualBuffs:O.create({blessingOfKings:!0,blessingOfMight:f.TristateEffectImproved}),debuffs:A.create({bloodFrenzy:!0,heartOfTheCrusader:!0,mangle:!0,sunderArmor:!0,curseOfWeakness:f.TristateEffectRegular,faerieFire:f.TristateEffectImproved,ebonPlaguebringer:!0})},playerIconInputs:[_,U,q],includeBuffDebuffInputs:[V,F],excludeBuffDebuffInputs:[],otherInputs:{inputs:[j,D,B,W,L]},encounterPicker:{showExecuteProportion:!0},presets:{talents:[He,ke],rotations:[Pe,Ee,xe,we],gear:[Te,Oe,Ae,ye,Ge,Re,be,re,me,he,ge,Ie,ue,Se,ve,fe]},autoRotation:e=>0==e.getTalentTree()?we.rotation.rotation:Ee.rotation.rotation,raidSimPresets:[{spec:y.SpecWarrior,tooltip:"Arms Warrior",defaultName:"Arms",iconUrl:G(R.ClassWarrior,0),talents:He.data,specOptions:Ce,consumes:Ve,defaultFactionRaces:{[l.Unknown]:b.RaceUnknown,[l.Alliance]:b.RaceHuman,[l.Horde]:b.RaceOrc},defaultGear:{[l.Unknown]:{},[l.Alliance]:{1:me.gear,2:he.gear,3:Ie.gear,4:ve.gear},[l.Horde]:{1:me.gear,2:he.gear,3:Se.gear,4:fe.gear}}},{spec:y.SpecWarrior,tooltip:"Fury Warrior",defaultName:"Fury",iconUrl:G(R.ClassWarrior,1),talents:ke.data,specOptions:Ce,consumes:Ve,defaultFactionRaces:{[l.Unknown]:b.RaceUnknown,[l.Alliance]:b.RaceHuman,[l.Horde]:b.RaceOrc},defaultGear:{[l.Unknown]:{},[l.Alliance]:{1:Oe.gear,2:Ae.gear,3:ye.gear,4:Re.gear},[l.Horde]:{1:Oe.gear,2:Ae.gear,3:Ge.gear,4:be.gear}}}]});class We extends M{constructor(e,s){super(e,s,Fe),new Le(this)}}class Le extends N{constructor(e){super(e,!0,!0,!1,!0),s(this,"player"),this.player=e.player}updateGemPriority(e,s){this.useExpGems=!this.player.getSpecOptions().disableExpertiseGemming,super.updateGemPriority(e,s)}calcExpTarget(){let e=super.calcExpTarget();const s=this.player.getTalents().weaponMastery;return!!s&&(e-=4*s*S),e}}export{We as W};
//# sourceMappingURL=sim-c8fa657a.chunk.js.map
