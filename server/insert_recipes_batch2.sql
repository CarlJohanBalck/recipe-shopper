-- =====================================================
-- Batch 2: 20 Vegetarian Recipes (IDs 97-116)
-- New ingredients start at ID 356
-- =====================================================

-- =====================================================
-- NEW INGREDIENTS
-- =====================================================

INSERT INTO ingredient (id, name, category_id) VALUES
(356, 'grönkål', 1),
(357, 'färsk jäst', NULL),
(358, 'hela tomater', 1),
(360, 'hackad timjan', 1),
(361, 'blandad lök', 1),
(362, 'bulgur', NULL),
(363, 'saffran', NULL),
(364, 'jordnötsolja', NULL),
(365, 'sockerärtor', 1),
(366, 'noriark', NULL),
(367, 'fänkål', 1),
(368, 'kokta svarta bönor', NULL),
(369, 'gurkmeja', NULL),
(370, 'torkad ingefära', NULL),
(371, 'rostade mandelspån', NULL),
(372, 'sultanrussin', NULL),
(373, 'blomkål', 1),
(374, 'tryffelolja', NULL),
(375, 'butternutpumpa', 1),
(376, 'kanelstång', NULL),
(377, 'grahamsmjöl', NULL),
(378, 'kokta rödbetor', 1),
(379, 'cottage cheese', 2),
(380, 'naanbröd', 3),
(381, 'koriander', 1),
(382, 'cocktailtomater', 1),
(383, 'nachochips', NULL),
(384, 'ättika', NULL),
(385, 'färsk timjan', 1),
(386, 'rädisor', 1),
(387, 'röd mangold', 1),
(388, 'stark senap', NULL),
(389, 'rökt paprikapulver', NULL),
(390, 'chipotlepeppar', NULL),
(391, 'naturell tofu', NULL),
(392, 'grillolja', NULL),
(393, 'vitlökssås', NULL);

-- =====================================================
-- RECIPES
-- =====================================================

-- 97: Enkel potatisgratäng
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(97, 'Enkel potatisgratäng',
 'https://www.ica.se/recept/enkel-potatisgratang-3680/',
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_223442/cf_259/potatisgratang.jpg',
 0,
 'Sätt ugnen på 200°C. Koka upp grädde och mjölk med salt och peppar. Skala och skiva potatisen tunt, hacka löken. Blanda ner i gräddmjölken, koka upp. Häll i ugnsform. Grädda ca 30 min. Vila 5 min.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(97, 275, 3, 3, 0),    -- grädde 3 dl
(97, 31, 3, 3, 0),     -- mjölk 3 dl
(97, 318, 1, 1.5, 0),  -- salt 1.5 tsk
(97, 319, 11, 2, 0),   -- svartpeppar 2 krm
(97, 99, 7, 1, 0),     -- fast potatis 1 kg
(97, 10, 17, 2, 0);    -- gul lök 2 st

-- 98: Vego grönkålspaj med valnötter
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(98, 'Vego grönkålspaj med valnötter',
 'https://www.ica.se/recept/vego-gronkalspaj-med-valnotter-715795/',
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_67722/cf_259/vego_gronkalspaj_med_valnotter.jpg',
 1,
 'Hacka ihop smör och mjöl, tillsätt vatten, kyls 30 min. Hacka och koka grönkål 5-10 min. Fräs lök och kål i smör. Ugn 200°C, tryck ut deg i pajform, förgrädda 10 min. Vispa ägg, grädde och mjölk. Fyll med kålblandning, getost, äggstanning och valnötter. Grädda 35-40 min.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(98, 47, 6, 150, 0),   -- smör 150 g
(98, 11, 3, 3.5, 0),   -- vetemjöl 3.5 dl
(98, 356, 6, 250, 0),  -- grönkål 250 g
(98, 97, 17, 2, 0),    -- rödlök 2 st
(98, 300, 3, 2, 0),    -- valnötter 2 dl
(98, 40, 17, 3, 0),    -- ägg 3 st
(98, 8, 3, 2, 0),      -- vispgrädde 2 dl
(98, 31, 3, 1, 0),     -- mjölk 1 dl
(98, 165, 6, 200, 0),  -- getost 200 g
(98, 47, 2, 1, 0),     -- smör 1 msk
(98, 318, 1, 1, 0),    -- salt 1 tsk
(98, 319, 11, 2, 0);   -- svartpeppar 2 krm

-- 99: Pizza Margherita
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(99, 'Pizza Margherita',
 'https://www.ica.se/recept/pizza-margherita-740429/',
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/Margharita-740429.jpg',
 1,
 'Pizzadeg: Blanda vatten, jäst, olja, salt och mjöl. Knåda till deg. Jäs 1.5 timme, dela i 4. Kyls 5 timmar. Tomatsås: Fräs lök och vitlök i olja, tillsätt tomater, tomatpuré och kryddor, sjud 15 min. Ugn 250°C. Forma pizzabottnar, toppa med sås och mozzarella. Grädda 10-15 min. Toppa med basilika.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(99, 357, 6, 50, 0),   -- färsk jäst 50 g
(99, 126, 2, 2, 0),    -- olja 2 msk
(99, 318, 2, 0.5, 0),  -- salt 0.5 msk
(99, 11, 3, 10, 0),    -- vetemjöl 10 dl
(99, 10, 17, 1, 0),    -- gul lök 1 st
(99, 15, 17, 2, 0),    -- vitlöksklyftor 2 st
(99, 118, 2, 2, 0),    -- olivolja 2 msk
(99, 358, 13, 1, 0),   -- hela tomater 1 förp
(99, 18, 2, 2, 0),     -- tomatpuré 2 msk
(99, 174, 1, 1, 0),    -- torkad oregano 1 tsk
(99, 137, 1, 1, 0),    -- torkad timjan 1 tsk
(99, 29, 1, 0.5, 0),   -- chilipulver 0.5 tsk
(99, 93, 6, 250, 0),   -- mozarella 250 g
(99, 139, 17, 1, 0);   -- färsk basilika 1 st

-- 100: Mushroom pot pie
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(100, 'Mushroom pot pie',
 'https://www.ica.se/recept/mushroom-pot-pie-750059/',
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/ky3dqjv3hg9lqiv74tah.jpg',
 1,
 'Stek champinjoner i smör med salt 10 min. Ugn 200°C. Stek purjolök, morötter och selleri i olja 10 min. Smält smör, fräs vitlök, vispa i mjöl och grädde. Tillsätt buljong och peppar. Hacka timjan, blanda allt. Täck med smördeg, pensla med ägg. Grädda 25-30 min.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(100, 73, 6, 500, 0),   -- champinjoner 500 g
(100, 47, 2, 4, 0),     -- smör 4 msk
(100, 318, 11, 1, 0),   -- salt 1 krm
(100, 2, 17, 1, 0),     -- purjolök 1 st
(100, 25, 17, 2, 0),    -- morötter 2 st
(100, 134, 17, 1, 0),   -- selleristjälk 1 st
(100, 343, 2, 1.5, 0),  -- neutral olja 1.5 msk
(100, 15, 17, 1, 0),    -- vitlöksklyfta 1 st
(100, 11, 2, 2, 0),     -- vetemjöl 2 msk
(100, 8, 3, 4, 0),      -- vispgrädde 4 dl
(100, 52, 17, 1, 0),    -- grönsaksbuljongtärning 1 st
(100, 319, 11, 2, 0),   -- svartpeppar 2 krm
(100, 360, 3, 1, 0),    -- hackad timjan 1 dl
(100, 338, 13, 1, 0),   -- smördeg 1 förp
(100, 40, 17, 1, 0);    -- ägg 1 st

-- 101: Galette med lök och grönkål
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(101, 'Galette med lök och grönkål',
 'https://www.ica.se/recept/galette-med-lok-och-gronkal-727237/',
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/imagevaultfiles/id_219864/cf_259/galette_med_lok_och_gronkal.jpg',
 1,
 'Ugn 225°C. Blanda lök med olja och salt, rosta 30 min. Blanda mjöl och salt, smula i smör, tillsätt ägg. Kyls 15 min. Ugn 200°C. Massera grönkål med olja och salt. Kavla deg till rund platta, fyll med grönkål och rostad lök. Strö ost, vik kanter. Grädda ca 40 min.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(101, 361, 6, 400, 0),  -- blandad lök 400 g
(101, 118, 2, 2.5, 0),  -- olivolja 2.5 msk
(101, 318, 1, 1.5, 0),  -- salt 1.5 tsk
(101, 11, 3, 4, 0),     -- vetemjöl 4 dl
(101, 47, 6, 150, 0),   -- smör 150 g
(101, 40, 17, 1, 0),    -- ägg 1 st
(101, 356, 6, 100, 0),  -- grönkål 100 g
(101, 83, 3, 1, 0);     -- riven ost 1 dl

-- 102: Saffransbulgur med grönsaker
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(102, 'Saffransbulgur med grönsaker',
 'https://www.ica.se/recept/saffransbulgur-med-gronsaker-334386/',
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/imagevaultfiles/id_64140/cf_259/saffransbulgur_med_gronsaker.jpg',
 0,
 'Finhacka lök och vitlök, fräs i olja. Tillsätt bulgur och saffran, fräs. Häll på buljong, koka 5 min. Dra av och låt svälla. Skär lök i klyftor och paprika i stavar. Woka med sockerärtor. Krydda med soja. Servera med noriark.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(102, 10, 17, 1, 0),    -- gul lök 1 st
(102, 15, 17, 2, 0),    -- vitlöksklyftor 2 st
(102, 118, 2, 1, 0),    -- olivolja 1 msk
(102, 362, 3, 4, 0),    -- bulgur 4 dl
(102, 363, 17, 1, 0),   -- saffran 1 st
(102, 7, 3, 6, 0),      -- grönsaksbuljong 6 dl
(102, 97, 17, 2, 0),    -- rödlök 2 st
(102, 119, 17, 1, 0),   -- röd paprika 1 st
(102, 120, 17, 1, 0),   -- gul paprika 1 st
(102, 364, 2, 1, 0),    -- jordnötsolja 1 msk
(102, 365, 6, 200, 0),  -- sockerärtor 200 g
(102, 4, 2, 1, 0),      -- japansk soya 1 msk
(102, 366, 17, 1, 0);   -- noriark 1 st

-- 103: Vegogryta från Medelhavet
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(103, 'Vegogryta från Medelhavet',
 'https://www.ica.se/recept/vegogryta-fran-medelhavet-369475/',
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/imagevaultfiles/id_33000/cf_259/vegogryta_fran_medelhavet.jpg',
 0,
 'Skär fänkål, lök och tomater i bitar. Hacka vitlök. Fräs vitlök och lök i olja. Lägg i fänkål. Häll på buljong och crème fraiche. Koka 5 min. Lägg i tomater. Skölj bönor, rör ner. Krydda med peppar, timjan och salt.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(103, 367, 17, 2, 0),   -- fänkål 2 st
(103, 101, 17, 2, 0),   -- salladslök 2 st
(103, 16, 17, 2, 0),    -- tomater 2 st
(103, 15, 17, 2, 0),    -- vitlöksklyftor 2 st
(103, 118, 2, 1, 0),    -- olivolja 1 msk
(103, 7, 3, 1, 0),      -- grönsaksbuljong 1 dl
(103, 316, 3, 2, 0),    -- creme fraiche 2 dl
(103, 368, 14, 1, 0),   -- kokta svarta bönor 1 burk
(103, 319, 11, 1, 0),   -- svartpeppar 1 krm
(103, 360, 2, 1, 0);    -- hackad timjan 1 msk

-- 104: Persisk linsgryta med rotselleri och mandel
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(104, 'Persisk linsgryta med rotselleri och mandel',
 'https://www.ica.se/recept/persisk-linsgryta-med-rotselleri-och-mandel-719569/',
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_232344/cf_259/persisk_linsgryta_med_rotselleri_och_mandel.jpg',
 0,
 'Koka ris. Hacka lök och vitlök. Fräs i olja med kryddor. Tillsätt buljong och kokosmjölk, koka upp. Rör i linser, sjud 8 min. Riv rotselleri, tillsätt, sjud 2 min. Vänd ner spenat. Smaka av med lime, salt och peppar. Servera med ris, mandel och russin.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(104, 64, 18, 4, 0),    -- ris 4 port
(104, 10, 17, 1, 0),    -- gul lök 1 st
(104, 15, 17, 2, 0),    -- vitlöksklyftor 2 st
(104, 118, 2, 1, 0),    -- olivolja 1 msk
(104, 369, 1, 1, 0),    -- gurkmeja 1 tsk
(104, 370, 1, 1, 0),    -- torkad ingefära 1 tsk
(104, 89, 1, 1, 0),     -- spiskummin 1 tsk
(104, 29, 1, 1, 0),     -- chilipulver 1 tsk
(104, 7, 3, 7.5, 0),    -- grönsaksbuljong 7.5 dl
(104, 189, 19, 400, 0), -- kokosmjölk 400 ml
(104, 201, 3, 3, 0),    -- röda linser 3 dl
(104, 141, 6, 400, 0),  -- rotselleri 400 g
(104, 264, 6, 65, 0),   -- babyspenat 65 g
(104, 107, 17, 1, 0),   -- lime 1 st
(104, 371, 6, 50, 0),   -- rostade mandelspån 50 g
(104, 372, 3, 1, 0);    -- sultanrussin 1 dl

-- 105: Lyxig blomkålssoppa
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(105, 'Lyxig blomkålssoppa',
 'https://www.ica.se/recept/lyxig-blomkalssoppa-659654/',
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_248043/cf_259/lyxig_blomkalssoppa.jpg',
 0,
 'Skiva lök, dela blomkål och skär potatis i bitar. Fräs i olja 2 min. Tillsätt vin, koka in 1 min. Häll i vatten, grädde och fond. Koka 15 min. Mixa slät. Tillsätt ost, rör tills smält. Smaka av med salt och peppar. Toppa med gräslök och tryffelolja.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(105, 14, 17, 2, 0),    -- schalottenlök 2 st
(105, 109, 2, 2, 0),    -- rapsolja 2 msk
(105, 373, 6, 500, 0),  -- blomkål 500 g
(105, 99, 17, 1, 0),    -- potatis 1 st
(105, 67, 3, 0.5, 0),   -- vitt vin 0.5 dl
(105, 8, 3, 2, 0),      -- vispgrädde 2 dl
(105, 74, 2, 1.5, 0),   -- grönsaksfond 1.5 msk
(105, 69, 3, 1, 0),     -- riven parmesan 1 dl
(105, 140, 15, 0.5, 0), -- gräslök 0.5 kruka
(105, 374, 1, 1, 0);    -- tryffelolja 1 tsk

-- 106: Pumpacurry med kokosmjölk och ris
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(106, 'Pumpacurry med kokosmjölk och ris',
 'https://www.ica.se/recept/pumpacurry-med-kokosmjolk-och-ris-727485/',
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_222479/cf_259/pumpacurry_med_kokosmjolk_och_ris.jpg',
 0,
 'Ugn 225°C. Skala och skär pumpa. Blanda vitlök, chili, vinäger, olja, lönnsirap, salt och peppar. Häll över pumpan, rosta 30 min. Finhacka ingefära, vitlök och lök. Stek i olja med saffran. Häll på kokosmjölk och vatten. Tillsätt tomater, salt, kardemumma och kanel. Sjud 10 min med lock. Koka ris. Lägg ner pumpa, koka 10 min till.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(106, 375, 6, 500, 0),  -- butternutpumpa 500 g
(106, 15, 17, 1.5, 0),  -- vitlöksklyftor 1.5 st
(106, 199, 2, 2, 0),    -- rödvinsvinäger 2 msk
(106, 118, 2, 1, 0),    -- olivolja 1 msk
(106, 292, 2, 0.5, 0),  -- lönnsirap 0.5 msk
(106, 318, 1, 1.5, 0),  -- salt 1.5 tsk
(106, 319, 11, 1, 0),   -- svartpeppar 1 krm
(106, 17, 17, 1, 0),    -- ingefära 1 st
(106, 10, 17, 1, 0),    -- gul lök 1 st
(106, 109, 2, 3, 0),    -- rapsolja 3 msk
(106, 363, 17, 1, 0),   -- saffran 1 st
(106, 189, 19, 400, 0), -- kokosmjölk 400 ml
(106, 37, 6, 250, 0),   -- körsbärstomater 250 g
(106, 87, 11, 1, 0),    -- malen kardemumma 1 krm
(106, 376, 17, 1, 0),   -- kanelstång 1 st
(106, 64, 18, 4, 0);    -- ris 4 port

-- 107: Rödbetspaj med chèvre och valnötter
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(107, 'Rödbetspaj med chèvre och valnötter',
 'https://www.ica.se/recept/rodbetspaj-med-chevre-och-valnotter-726500/',
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_211722/cf_259/rodbetspaj_med_chèvre_och_valnotter.jpg',
 1,
 'Pajdeg: Smula smör i mjöl, tillsätt vatten, arbeta ihop. Tryck ut i pajform, kyls 30 min. Ugn 200°C, förgrädda 10 min. Sänk till 175°C. Skär rödbetor i bitar. Vispa ägg, cottage cheese, mjölk, honung, rosmarin och salt. Fördela rödbetor, smula chèvre, häll på äggstanning. Grädda 30-40 min. Strö valnötter.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(107, 47, 6, 100, 0),   -- smör 100 g
(107, 11, 3, 2, 0),     -- vetemjöl 2 dl
(107, 377, 3, 1, 0),    -- grahamsmjöl 1 dl
(107, 378, 6, 300, 0),  -- kokta rödbetor 300 g
(107, 40, 17, 3, 0),    -- ägg 3 st
(107, 379, 3, 2, 0),    -- cottage cheese 2 dl
(107, 31, 3, 1, 0),     -- mjölk 1 dl
(107, 175, 1, 1, 0),    -- honung 1 tsk
(107, 349, 1, 0.5, 0),  -- rosmarin 0.5 tsk
(107, 318, 1, 0.5, 0),  -- salt 0.5 tsk
(107, 176, 6, 200, 0),  -- chevré ost 200 g
(107, 300, 3, 1, 0);    -- valnötter 1 dl

-- 108: Potatissoppa grundrecept
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(108, 'Potatissoppa grundrecept',
 'https://www.ica.se/recept/potatissoppa-grundrecept-727219/',
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_219758/cf_259/potatissoppa_(grundrecept).jpg',
 0,
 'Tärna potatis, hacka lök och vitlök. Fräs i smör tills löken mjuknar. Tillsätt timjan, fräs. Tillsätt vatten, grädde och buljong. Koka 10-15 min. Mixa slät. Smaka av med citronskal, vinäger, salt och peppar. Toppa med mandel och timjan.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(108, 99, 6, 500, 0),   -- fast potatis 500 g
(108, 10, 17, 1, 0),    -- gul lök 1 st
(108, 15, 17, 1, 0),    -- vitlöksklyfta 1 st
(108, 47, 2, 2, 0),     -- smör 2 msk
(108, 360, 2, 1, 0),    -- hackad timjan 1 msk
(108, 8, 3, 3, 0),      -- vispgrädde 3 dl
(108, 52, 17, 1, 0),    -- grönsaksbuljongtärning 1 st
(108, 48, 17, 1, 0),    -- citron 1 st
(108, 279, 2, 1.5, 0);  -- vitvinsvinäger 1.5 msk

-- 109: Linsgryta med kokosmjölk
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(109, 'Linsgryta med kokosmjölk',
 'https://www.ica.se/recept/linsgryta-med-kokosmjolk-724788/',
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_250515/cf_259/linsgryta_med_kokosmjolk.jpg',
 0,
 'Koka ris. Hacka och fräs lök i olja. Pressa i vitlök, tillsätt curry och tomatpuré, fräs. Rör i kokosmjölk, vatten, buljong, linser och sambal oelek. Koka 15 min. Dela tomater, vänd ner. Smaka av. Servera med ris, naanbröd, yoghurt och koriander.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(109, 64, 18, 4, 0),    -- ris 4 port
(109, 10, 17, 1, 0),    -- gul lök 1 st
(109, 126, 2, 1, 0),    -- olja 1 msk
(109, 15, 17, 1, 0),    -- vitlöksklyfta 1 st
(109, 200, 1, 1, 0),    -- curry 1 tsk
(109, 18, 2, 2, 0),     -- tomatpuré 2 msk
(109, 189, 19, 400, 0), -- kokosmjölk 400 ml
(109, 52, 17, 1, 0),    -- grönsaksbuljongtärning 1 st
(109, 197, 3, 2, 0),    -- torkade röda linser 2 dl
(109, 202, 1, 1, 0),    -- sambal oelek 1 tsk
(109, 380, 13, 2, 0),   -- naanbröd 2 förp
(109, 37, 6, 250, 0),   -- körsbärstomater 250 g
(109, 381, 15, 0.5, 0), -- koriander 0.5 kruka
(109, 60, 3, 2, 0);     -- matyoghurt 2 dl

-- 110: Svamppizza med karamelliserad lök
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(110, 'Svamppizza med karamelliserad lök',
 'https://www.ica.se/recept/svamppizza-med-karamelliserad-lok-750715/',
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/kkine2v628pd2dwgrc0n.jpg',
 0,
 'Ugn 250°C. Skiva och stek lök i smör och olja på svag värme 20 min. Tillsätt socker, salt och peppar. Bred crème fraiche på pizzabottnar, strö mozzarella. Skiva svamp och vitlök, lägg på. Ringla olja. Grädda 8-10 min. Toppa med persilja och karamelliserad lök.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(110, 10, 17, 2, 0),    -- gul lök 2 st
(110, 47, 2, 1, 0),     -- smör 1 msk
(110, 126, 2, 1, 0),    -- olja 1 msk
(110, 148, 1, 0.5, 0),  -- socker 0.5 tsk
(110, 316, 3, 1, 0),    -- crème fraiche 1 dl
(110, 147, 3, 3, 0),    -- riven mozzarella 3 dl
(110, 228, 17, 1, 0),   -- portabellosvamp 1 st
(110, 15, 17, 1, 0),    -- vitlöksklyfta 1 st
(110, 118, 2, 1, 0),    -- olivolja 1 msk
(110, 54, 15, 0.5, 0);  -- persilja 0.5 kruka

-- 111: Godaste pajen
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(111, 'Godaste pajen',
 'https://www.ica.se/recept/godaste-pajen-724866/',
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/tjrzxwk60de16ocfz06q.jpg',
 0,
 'Pajdeg: hacka smör och mjöl i matberedare, tillsätt vatten. Kyls 30 min. Ugn 200°C. Kavla ut deg, förgrädda 10 min. Vispa ägg, mjölk, grädde, salt och peppar. Fräs lök i olja, tillsätt spenat och vitlök, krydda med oregano. Fyll pajskal med spenat, häll äggstanning, lägg tomater, smula feta. Grädda 25-30 min.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(111, 47, 6, 125, 0),   -- smör 125 g
(111, 11, 3, 3, 0),     -- vetemjöl 3 dl
(111, 318, 11, 1, 0),   -- salt 1 krm (for dough)
(111, 40, 17, 4, 0),    -- ägg 4 st
(111, 31, 3, 1, 0),     -- mjölk 1 dl
(111, 8, 3, 2, 0),      -- vispgrädde 2 dl
(111, 318, 1, 0.5, 0),  -- salt 0.5 tsk (for filling)
(111, 319, 11, 2, 0),   -- peppar 2 krm
(111, 14, 17, 2, 0),    -- schalottenlök 2 st
(111, 126, 2, 1, 0),    -- olja 1 msk
(111, 264, 6, 300, 0),  -- babyspenat 300 g
(111, 15, 17, 3, 0),    -- vitlöksklyftor 3 st
(111, 174, 2, 1, 0),    -- torkad oregano 1 msk
(111, 37, 6, 125, 0),   -- körsbärstomater 125 g
(111, 122, 6, 150, 0);  -- fetaost 150 g

-- 112: Gratinerade vegofärsnachos
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(112, 'Gratinerade vegofärsnachos',
 'https://www.ica.se/recept/gratinerade-vegofarsnachos-719243/',
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/imagevaultfiles/id_121955/cf_259/gratinerade_vegofarsnachos.jpg',
 0,
 'Picklad zucchini: Blanda vatten, socker och ättika. Skiva zucchini, lägg i lagen. Ugn 225°C. Stek vegofärs i olja, rör ner crème fraiche, smaka av. Dela tomater, tärna paprika. Fördela allt med jalapeño och nachochips på plåt. Gratinera. Toppa med ruccola.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(112, 116, 17, 0.5, 0), -- zucchini 0.5 st
(112, 44, 6, 300, 0),   -- vegofärs 300 g
(112, 118, 2, 0.5, 0),  -- olivolja 0.5 msk
(112, 316, 3, 2, 0),    -- crème fraiche 2 dl
(112, 382, 17, 8, 0),   -- cocktailtomater 8 st
(112, 119, 17, 1, 0),   -- röd paprika 1 st
(112, 106, 6, 50, 0),   -- jalapeño 50 g
(112, 383, 6, 200, 0),  -- nachochips 200 g
(112, 70, 6, 25, 0),    -- rucola 25 g
(112, 148, 3, 0.5, 0),  -- socker 0.5 dl
(112, 384, 2, 2, 0);    -- ättika 2 msk

-- 113: Rödbetspaj med getost och rädisor
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(113, 'Rödbetspaj med getost och rädisor',
 'https://www.ica.se/recept/rodbetspaj-med-getost-och-radisor-728871/',
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_238090/cf_259/rodbetspaj_med_getost_och_radisor.jpg',
 1,
 'Ugn 175°C. Skala och skiva lök och rödbetor. Hacka timjan, smula ost. Vispa ägg, yoghurt, timjan och salt. Lägg pajdeg i form, nagga. Häll i äggstanning, lägg lök och rödbetor, strö ost och ringla honung. Grädda 35 min. Toppa med pumpakärnor och timjan.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(113, 97, 17, 1, 0),    -- rödlök 1 st
(113, 378, 6, 500, 0),  -- kokta rödbetor 500 g
(113, 385, 15, 0.5, 0), -- färsk timjan 0.5 kruka
(113, 165, 6, 150, 0),  -- grekisk getost 150 g
(113, 40, 17, 5, 0),    -- ägg 5 st
(113, 204, 3, 5, 0),    -- grekisk yoghurt 5 dl
(113, 318, 1, 1, 0),    -- salt 1 tsk
(113, 338, 13, 1, 0),   -- smördeg 1 förp
(113, 175, 1, 1, 0),    -- honung 1 tsk
(113, 386, 6, 300, 0),  -- rädisor 300 g
(113, 387, 6, 65, 0);   -- röd mangold 65 g

-- 114: Vego stroganoff med halloumi
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(114, 'Vego stroganoff med halloumi',
 'https://www.ica.se/recept/vego-stroganoff-med-halloumi-724345/',
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/imagevaultfiles/id_185755/cf_259/vego_stroganoff_med_halloumi.jpg',
 0,
 'Skär halloumi i strimlor, stek i olja. Finhacka lök, pressa vitlök, stek gyllene. Tillsätt tomatpuré, senap, krossade tomater, vatten, crème fraiche och kryddor. Puttra 3 min. Blanda ner halloumi. Servera med ris.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(114, 22, 6, 300, 0),   -- halloumi 300 g
(114, 126, 2, 2, 0),    -- olja 2 msk
(114, 10, 17, 1, 0),    -- gul lök 1 st
(114, 15, 17, 1, 0),    -- vitlöksklyfta 1 st
(114, 18, 2, 1, 0),     -- tomatpuré 1 msk
(114, 388, 2, 1.5, 0),  -- stark senap 1.5 msk
(114, 20, 19, 500, 0),  -- krossade tomater 500 ml
(114, 316, 3, 1, 0),    -- crème fraiche 1 dl
(114, 389, 1, 1, 0),    -- rökt paprikapulver 1 tsk
(114, 390, 11, 0.5, 0); -- chipotlepeppar 0.5 krm

-- 115: Vegetariska grillspett
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(115, 'Vegetariska grillspett',
 'https://www.ica.se/recept/vegetariska-grillspett-730309/',
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/ypfzmummhpn6bhhonmdh.jpg',
 0,
 'Blötlägg träspett 20 min. Skär grönsaker och tofu i 3 cm bitar. Vänd i grillolja, marinera 10 min. Varva på spett, grilla 10 min. Pensla med grillsås. Toppa med salladslök, sesamfrö och chiliflakes.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(115, 97, 17, 1, 0),    -- rödlök 1 st
(115, 116, 6, 300, 0),  -- zucchini 300 g
(115, 73, 6, 250, 0),   -- champinjoner 250 g
(115, 119, 17, 1, 0),   -- röd paprika 1 st
(115, 391, 6, 270, 0),  -- naturell tofu 270 g
(115, 392, 3, 1.5, 0),  -- grillolja 1.5 dl
(115, 101, 17, 2, 0),   -- salladslök 2 st
(115, 162, 2, 1, 0),    -- sesamfrön 1 msk
(115, 226, 1, 1, 0),    -- chiliflakes 1 tsk
(115, 393, 3, 1, 0);    -- vitlökssås 1 dl

-- 116: Omelett i ugn
INSERT INTO recipe (id, name, url, image, helg, instructions) VALUES
(116, 'Omelett i ugn',
 'https://www.ica.se/recept/omelett-i-ugn-721853/',
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/imagevaultfiles/id_237833/cf_259/omelett_i_ugn_.jpg',
 0,
 'Ugn 200°C. Vispa mjöl med lite mjölk till slät redning. Vispa ner hälften av mjölken, koka upp. Ta av, vispa ner resten. Vispa ägg, rör ner. Tillsätt salt och peppar. Häll i smord form. Grädda 20 min.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(116, 11, 2, 1.5, 0),   -- vetemjöl 1.5 msk
(116, 31, 3, 3, 0),     -- mjölk 3 dl
(116, 40, 17, 8, 0),    -- ägg 8 st
(116, 318, 1, 0.5, 0),  -- salt 0.5 tsk
(116, 319, 11, 1, 0),   -- svartpeppar 1 krm
(116, 47, 2, 1, 0);     -- smör 1 msk
