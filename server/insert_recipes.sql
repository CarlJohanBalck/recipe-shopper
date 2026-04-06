-- New ingredients only (no duplicates)
-- Existing: 198=passerade tomater, 313=ostronskivling, 279=vitvinsvinäger, 220=soltorkade tomater, 301=russin, 199=rödvinsvinäger, 311=mandelmjöl
INSERT INTO ingredient (id, name, category_id) VALUES
(320, 'blandad svamp', 1),
(321, 'torkade belugalinser', 1),
(323, 'blomkålshuvud', 1),
(324, 'hel kardemumma', NULL),
(325, 'mild yoghurt', 2),
(326, 'riven kokos', NULL),
(327, 'fryst sojafärs', 8),
(328, 'pastasås med chili', NULL),
(329, 'kakao', NULL),
(330, 'kokta kidneybönor', NULL),
(331, 'krispsallad', 1),
(332, 'växtbaserad fraiche', 2),
(333, 'tortillachips', NULL),
(334, 'kummin', NULL),
(335, 'kokta vita bönor', NULL),
(336, 'krossade tomater med chili', NULL),
(337, 'fullkornsbröd', 3),
(338, 'smördeg', NULL),
(339, 'tomatsås', NULL),
(340, 'röda paprikor', 1),
(342, 'chipotlepaste', NULL),
(343, 'neutral olja', NULL),
(344, 'hackad koriander', 1),
(345, 'kvisttomater', 1),
(346, 'vitkål', 1),
(347, 'torrt vitt vin', NULL),
(348, 'skalade tomater', NULL),
(349, 'rosmarin', NULL),
(350, 'kokta blandade bönor', NULL),
(351, 'cayennepeppar', NULL),
(353, 'soltorkade tomater i olja', NULL),
(354, 'svarta linser', NULL),
(355, 'grönsaksbuljongtärningar', NULL);

-- Recipes 87-96
INSERT INTO recipe (id, name, url, helg, image_url, instructions) VALUES
(87, 'Vegetarisk bourguignon med svamp',
 'https://www.ica.se/recept/vegetarisk-bourguignon-med-svamp-727486/', 1,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_222481/cf_259/vegetarisk_bourguignon_med_svamp.jpg',
 'Rosta marinerad svamp och rödlök i ugn på 225°C i 25-30 min. Koka linser med grönsaksbuljong 15-20 min. Fräs riven morot, vitlök och lök i olja, tillsätt rödvin, socker, lagerblad och buljongtärning. Lägg i rostad svamp, timjan, passerade tomater och vatten. Koka utan lock 20 min. Tillsätt linser och sjud 10 min till. Smaka av med salt och peppar.'),

(88, 'Vegetarisk Wellington',
 'https://www.ica.se/recept/vegetarisk-wellington-724938/', 1,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_192158/cf_259/vegetarisk_wellington.jpg',
 'Ugn 200°C. Tärna rödbeta, lägg i ugnsform med timjan, olja, salt och peppar. Rosta 30 min. Koka linser enligt förpackning. Finhacka lök, vitlök och champinjoner. Fräs i olja 5 min, tillsätt soja och peppar. Blanda svampblandningen med linser, rödbeta, senap och valnötter. Ugn 225°C. Rulla ut smördeg, fyll med blandningen, rulla ihop. Pensla med olja, grädda 20 min. Servera med rödvinssås.'),

(89, 'Vegetarisk chili',
 'https://www.ica.se/recept/vegetarisk-chili-716661/', 0,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_232329/cf_259/vegetarisk_chili.jpg',
 'Koka riset. Finhacka lök och vitlök. Fräs lökhacket i olivolja med sojafärsen. Tillsätt vatten, buljong, pastasås, kakao, chilipulver, oregano, socker och tomatpuré. Puttra 5 min. Skölj och tillsätt bönor. Servera med crème fraiche, sallad, ris och tortillachips.'),

(90, 'Vegetarisk gulasch med bönor',
 'https://www.ica.se/recept/vegetarisk-gulasch-med-bonor-645166/', 0,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_251714/cf_259/vegetarisk_gulasch_med_bonor.jpg',
 'Skala och tärna potatis, hacka lök och vitlök. Dela och kärna ur paprika, skär i bitar. Krossa kummin. Fräs alla grönsaker i olja, rör i tomatpuré och kryddor. Tillsätt vatten, buljongtärningar och krossade tomater. Sjud 10-15 min med lock. Skölj bönor och rör ner. Smaka av med salt och peppar. Servera med persilja och gräddfil.'),

(91, 'Vegetarisk korma',
 'https://www.ica.se/recept/vegetarisk-korma-717304/', 0,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_89869/cf_259/vegetarisk_korma.jpg',
 'Finhacka lök. Dela blomkål i buketter. Dela champinjoner. Krossa kardemumma och spiskummin. Smält smör, fräs lök med kardemumma och spiskummin 2 min. Tillsätt blomkål, champinjoner, russin, gurkmeja, socker och salt. Stek med lock 5-7 min. Rör i vatten, grädde, mandelmjöl och kokos. Sjud 2 min. Blanda i yoghurt och koriander. Servera med ris och naan.'),

(92, 'One pot lasagne med linser och svamp',
 'https://www.ica.se/recept/one-pot-lasagne-med-linser-och-svamp-730297/', 0,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/wdaahheygq19uhpn5z2p.jpg',
 'Ugn 225°C. Hacka svamp, vitlök, valnötter och soltorkade tomater. Stek svamp och vitlök i olja ca 5 min. Tillsätt valnötter, soltorkade tomater, tomatsås, fond, grädde, linser och vatten. Sjud 5 min. Bryt lasagneplattor i bitar, lägg i sås, koka 3-5 min. Bryt mozzarella, blanda hälften i grytan. Toppa med resten, gratinera ca 10 min.'),

(93, 'Palak paneer med tomat och halloumi',
 'https://www.ica.se/recept/palak-paneer-med-tomat-och-halloumi-722056/', 0,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_159450/cf_259/palak_paneer_med_tomat_och_halloumi.jpg',
 'Koka ris. Skär lök i klyftor, skiva vitlök, riv ingefära. Fräs lök, vitlök, ingefära, tomatpuré och garam masala 3-4 min. Tillsätt tomater, krossade tomater, vatten, grädde och buljong. Sjud 6-7 min. Vänd ner spenat. Tärna och stek halloumi gyllene. Blanda ner i grytan. Smaka av med salt.'),

(94, 'Chili sin carne på sojafärs',
 'https://www.ica.se/recept/chili-sin-carne-pa-sojafars-729022/', 0,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_239105/cf_259/chili_sin_carne_med_zucchini_och_fetaost.jpg',
 'Koka ris. Skölj bönor. Hacka vitlök och lök. Dela paprika, skär paprika och zucchini i bitar. Fräs grönsaker i olja 2 min. Stek sojafärs i resten av oljan, tills��tt spiskummin, paprikapulver och cayennepeppar. Lägg tillbaka grönsaker, tillsätt bönor, vinäger, krossade tomater, vatten, soja och salt. Sjud med lock 15 min. Servera med ris, avokado, feta och lime.'),

(95, 'Tacos med chipotlesvamp och fetaost',
 'https://www.ica.se/recept/tacos-med-chipotlesvamp-koriandersalsa-och-fetaost-750053/', 0,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/g4xbbmudzkwn0ibvldax.jpg',
 'Ugn 220°C. Riv svamp i bitar, blanda med olja och rosta 15 min. Blanda chipotlepaste, honung, rödvinsvinäger och salt. Häll över svampen, rosta 5-10 min till. Skiva jalapeño, riv limeskal och pressa saft. Blanda lime, vitlök, olja och jalapeño. Hacka koriander, tärna tomater, blanda i. Hyvla kål tunt. Smula feta. Värm bröd och servera allt.'),

(96, 'Ratatouille grundrecept',
 'https://www.ica.se/recept/ratatouille-grundrecept-720849/', 0,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246749/cf_259/ratatouille_grundrecept.jpg',
 'Hacka rödlök och vitlök. Grovhacka aubergine, zucchini och paprika. Fräs lök och vitlök i hälften av oljan 2 min. Tillsätt resten av oljan med zucchini och aubergine, stek 10 min. Lägg i paprika, tomatpuré, vitt vin och skalade tomater. Krydda med rosmarin och timjan. Sjud på låg värme minst 30 min. Smaka av med salt och peppar.');

-- Recipe ingredients
-- 87: Vegetarisk bourguignon med svamp
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(87, 320, 6, 300, 0),
(87, 97, 17, 1, 0),
(87, 109, 3, 0.33, 0),
(87, 4, 3, 0.5, 0),
(87, 137, 1, 1, 0),
(87, 319, 11, 1, 0),
(87, 321, 3, 1.5, 0),
(87, 52, 17, 1, 0),
(87, 25, 17, 2, 0),
(87, 15, 17, 1, 0),
(87, 10, 17, 1, 0),
(87, 273, 3, 4, 0),
(87, 148, 1, 1, 0),
(87, 173, 17, 1, 0),
(87, 198, 14, 1, 0),
(87, 12, 17, 1, 0);

-- 88: Vegetarisk Wellington
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(88, 38, 6, 500, 0),
(88, 137, 2, 1, 0),
(88, 354, 3, 1, 0),
(88, 97, 17, 1, 0),
(88, 15, 17, 1, 0),
(88, 73, 6, 250, 0),
(88, 4, 2, 1, 0),
(88, 229, 2, 0.5, 0),
(88, 300, 3, 1, 0),
(88, 338, 17, 1, 0),
(88, 109, 2, 2, 0),
(88, 318, 11, 1, 0),
(88, 319, 11, 1, 0),
(88, 273, 3, 3, 0),
(88, 74, 2, 1, 0),
(88, 148, 1, 1, 0),
(88, 75, 1, 1, 0);

-- 89: Vegetarisk chili
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(89, 64, 18, 4, 0),
(89, 10, 17, 1, 0),
(89, 15, 17, 2, 0),
(89, 118, 2, 1, 0),
(89, 327, 6, 300, 0),
(89, 52, 17, 1, 0),
(89, 328, 13, 1, 0),
(89, 329, 1, 1, 0),
(89, 29, 1, 0.5, 0),
(89, 174, 1, 1, 0),
(89, 148, 1, 1, 0),
(89, 18, 2, 1, 0),
(89, 330, 13, 1, 0),
(89, 331, 15, 1, 0),
(89, 332, 3, 2, 0),
(89, 333, 13, 1, 0);

-- 90: Vegetarisk gulasch med bönor
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(90, 99, 17, 3, 0),
(90, 10, 17, 2, 0),
(90, 15, 17, 1, 0),
(90, 340, 17, 2, 0),
(90, 334, 1, 2, 0),
(90, 126, 2, 1, 0),
(90, 18, 2, 2, 0),
(90, 90, 1, 2, 0),
(90, 355, 17, 2, 0),
(90, 336, 13, 1, 0),
(90, 335, 13, 1, 0),
(90, 54, 17, 1, 0),
(90, 39, 17, 1, 0);

-- 91: Vegetarisk korma
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(91, 10, 17, 1, 0),
(91, 323, 17, 1, 0),
(91, 73, 6, 100, 0),
(91, 324, 1, 1, 0),
(91, 89, 2, 1, 0),
(91, 47, 6, 100, 0),
(91, 301, 3, 0.5, 0),
(91, 200, 2, 1, 0),
(91, 148, 2, 0.5, 0),
(91, 318, 1, 1.5, 0),
(91, 8, 3, 1.5, 0),
(91, 311, 3, 2.5, 0),
(91, 326, 3, 1.5, 0),
(91, 325, 3, 4, 0),
(91, 344, 15, 1, 0);

-- 92: One pot lasagne med linser och svamp
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(92, 73, 6, 250, 0),
(92, 15, 17, 2, 0),
(92, 300, 3, 1, 0),
(92, 353, 17, 6, 0),
(92, 118, 2, 2, 0),
(92, 339, 13, 1, 0),
(92, 74, 2, 1, 0),
(92, 32, 3, 2, 0),
(92, 201, 3, 1, 0),
(92, 46, 6, 400, 0),
(92, 93, 6, 250, 0),
(92, 318, 1, 0.5, 0),
(92, 319, 1, 1, 0);

-- 93: Palak paneer med tomat och halloumi
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(93, 64, 18, 4, 0),
(93, 10, 17, 1, 0),
(93, 15, 17, 2, 0),
(93, 16, 17, 2, 0),
(93, 17, 2, 2, 0),
(93, 118, 2, 3, 0),
(93, 18, 2, 2, 0),
(93, 19, 2, 1, 0),
(93, 135, 6, 390, 0),
(93, 8, 3, 2, 0),
(93, 52, 17, 1, 0),
(93, 21, 6, 200, 0),
(93, 22, 6, 400, 0),
(93, 318, 11, 2, 0);

-- 94: Chili sin carne på sojafärs
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(94, 64, 18, 6, 0),
(94, 350, 13, 1, 0),
(94, 15, 17, 2, 0),
(94, 10, 17, 1, 0),
(94, 120, 17, 1, 0),
(94, 116, 17, 1, 0),
(94, 118, 2, 1, 0),
(94, 327, 13, 1, 0),
(94, 89, 2, 1, 0),
(94, 90, 2, 1, 0),
(94, 351, 1, 0.5, 0),
(94, 279, 2, 2, 0),
(94, 20, 6, 500, 0),
(94, 4, 2, 2, 0),
(94, 318, 1, 1, 0),
(94, 55, 17, 2, 0),
(94, 122, 6, 150, 0),
(94, 107, 17, 2, 0),
(94, 77, 6, 65, 0);

-- 95: Tacos med chipotlesvamp och fetaost
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(95, 313, 6, 450, 0),
(95, 343, 2, 3, 0),
(95, 342, 2, 3, 0),
(95, 175, 2, 2, 0),
(95, 199, 2, 1, 0),
(95, 318, 1, 0.5, 0),
(95, 106, 17, 1, 0),
(95, 107, 17, 0.5, 0),
(95, 15, 17, 0.5, 0),
(95, 344, 3, 1.5, 0),
(95, 345, 17, 3, 0),
(95, 346, 6, 200, 0),
(95, 122, 6, 150, 0),
(95, 247, 17, 12, 0),
(95, 39, 17, 1, 0);

-- 96: Ratatouille grundrecept
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(96, 97, 17, 1, 0),
(96, 15, 17, 3, 0),
(96, 91, 17, 1, 0),
(96, 116, 17, 1, 0),
(96, 119, 17, 1, 0),
(96, 118, 2, 2, 0),
(96, 18, 2, 1, 0),
(96, 347, 3, 1.5, 0),
(96, 348, 14, 1, 0),
(96, 349, 1, 2, 0),
(96, 137, 1, 1, 0);
