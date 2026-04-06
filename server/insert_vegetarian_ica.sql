-- 10 vegetarian recipes from ICA (recipe IDs 97-106, ingredient IDs 356-366)

-- New ingredients
INSERT INTO ingredient (id, name, category_id) VALUES
(356, 'sparris', 1),
(357, 'hjärtsallad', 1),
(358, 'blandade gröna bönor', 1),
(359, 'sötmandel', NULL),
(360, 'torkade franska örter', NULL),
(361, 'bakpulver', NULL),
(362, 'vaniljsocker', NULL),
(363, 'starkt kaffe', NULL),
(364, 'skållad strimlad mandel', NULL),
(365, 'äggvita', NULL),
(366, 'äggula', NULL);

-- Recipes
INSERT INTO recipe (id, name, url, helg, image_url, instructions) VALUES
(97, 'Busenkel broccolisoppa',
 'https://www.ica.se/recept/busenkel-broccolisoppa-712859/',
 0,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_223438/cf_259/busenkel_broccolisoppa.jpg',
 'Skala och skiva lök och potatis. Dela broccolin i bitar inkl. stammen. Koka upp grönsaksbuljongen, lägg i lök, potatis och broccoli och låt koka ca 10 minuter. Mixa slät med stavmixer, rör i matlagningsgrädden och koka upp. Smaka av med salt och peppar.'),

(98, 'Påsksallad med sparris och mandeldressing',
 'https://www.ica.se/recept/pasksallad-med-sparris-och-mandeldressing-750854/',
 1,
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/jxxhaqtcl3ski75uygyg.jpg',
 'Ansa sparrisen och dela i bitar. Skär hjärtsalladen i klyftor och lägg i kallt vatten. Koka sparris och bönor i saltat vatten 1–2 minuter och kyl i isvatten. Mortla mandel, vitlök, salt, peppar och örter till dressing, tillsätt olja och rödvinsvinäger. Arrangera grönsaker på fat och häll dressingen över.'),

(99, 'Pannkakor - grundsmet',
 'https://www.ica.se/recept/pannkakor-grundsmet-2083/',
 0,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_221148/cf_259/pannkakor_-_grundsmet.jpg',
 'Blanda mjöl och salt i en bunke. Vispa i hälften av mjölken till en slät smet, tillsätt resten av mjölken och äggen. Låt smeten vila ca 10 minuter. Stek tunna pannkakor i lite smör och servera med sylt, grädde eller bär.'),

(100, 'Amerikanska pannkakor',
 'https://www.ica.se/recept/amerikanska-pannkakor-713437/',
 1,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_239138/cf_259/amerikanska_pannkakor.jpg',
 'Blanda de torra ingredienserna i en bunke. Vispa i mjölk, smält smör och ägg till en slät smet. Stek tjocka, små pannkakor i smör på medelvärme ca 1,5 minut per sida tills de är gyllenbruna. Servera med florsocker, lönnsirap och blåbär.'),

(101, 'Våfflor grundrecept',
 'https://www.ica.se/recept/vafflor-grundrecept-292887/',
 0,
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/imagevaultfiles/id_238446/cf_259/vafflor_grundrecept.jpg',
 'Smält smöret och låt svalna. Blanda mjöl, bakpulver och salt. Vispa ner ägg och mjölk i mjölblandningen till en slät smet och rör sedan i smöret. Hetta upp våffeljärnet, smörj och grädda våfflorna tills de är gyllenbruna. Servera med sylt och grädde.'),

(102, 'Scones',
 'https://www.ica.se/recept/scones-690203/',
 0,
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/imagevaultfiles/id_229528/cf_259/scones.jpg',
 'Sätt ugnen på 250°C. Blanda vetemjöl, bakpulver och salt. Finfördela smöret i mjölblandningen och tillsätt mjölken. Rör snabbt ihop till en kladdig deg. Klicka ut 8 bullar på plåt med bakplåtspapper och grädda mitt i ugnen ca 10–12 minuter. Servera nygräddade med ost eller marmelad.'),

(103, 'Chokladbollar',
 'https://www.ica.se/recept/chokladbollar-5058/',
 0,
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/imagevaultfiles/id_240269/cf_259/chokladbollar.jpg',
 'Smält smöret och låt puttra 1 minut. Blanda socker, vaniljsocker, kakao, havregryn och kaffe med smöret. Ställ smeten i kylen ca 40 minuter tills den stelnar. Forma bollar och rulla i kokos eller strössel.'),

(104, 'Kladdig kladdkaka',
 'https://www.ica.se/recept/kladdig-kladdkaka-722982/',
 1,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_221660/cf_259/kladdig_kladdkaka.jpg',
 'Sätt ugnen på 200°C. Smöra och bröa en springform på 24 cm. Smält smöret och låt svalna. Vispa ägg och socker fluffigt, blanda ner kakao, vaniljsocker, mjöl och salt. Rör i smöret, häll i formen och grädda 10–15 minuter tills kanterna stelnat men mitten är lös. Servera med florsocker och vispgrädde.'),

(105, 'Toscakaka',
 'https://www.ica.se/recept/toscakaka-716486/',
 1,
 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_77225/cf_259/toscakaka.jpg',
 'Sätt ugnen på 175°C. Vispa ägg och socker pösigt, blanda ner smält smör och mjölk, sedan mjöl och bakpulver. Häll smeten i en smord form och grädda 20–25 minuter. Koka ihop smör, socker, mjöl, mjölk och mandel till glasyr och häll över kakan, grädda ytterligare 15 minuter tills glasyren är gyllenbrun. Låt svalna helt innan servering.'),

(106, 'Minipavlova med lemon curd',
 'https://www.ica.se/recept/minipavlova-med-lemon-curd-730240/',
 1,
 'https://assets.icanet.se/t_ICAseAbsoluteUrl/imagevaultfiles/id_251722/cf_259/minipavlova_med_lemon_curd.jpg',
 'Vispa äggvitor och salt hårt, tillsätt socker lite i taget och vispa till ett hårt glansigt maräng. Blanda ner majsstärkelse, vaniljsocker och vinäger. Spritsa maränger på bakplåtspapper och grädda i 100°C ca 45 minuter. Värm ägg, äggulor, socker och citronsaft i vattenbad, rör i smöret till lemon curd och fyll de svalnade marängnästena.');

-- Recipe ingredients
-- 97: Busenkel broccolisoppa
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(97, 10,  17, 1,   0),  -- gul lök 1 st
(97, 6,   6,  300, 0),  -- mjölig potatis 300 g
(97, 130, 6,  250, 0),  -- broccoli 250 g
(97, 7,   3,  9,   0),  -- grönsaksbuljong 9 dl
(97, 32,  3,  2.5, 0),  -- matlagningsgrädde 2.5 dl
(97, 318, 11, 1,   0),  -- salt 1 krm
(97, 319, 11, 1,   0);  -- svartpeppar 1 krm

-- 98: Påsksallad med sparris och mandeldressing
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(98, 356, 6,   250,  0),  -- sparris 250 g
(98, 357, 17,  2,    0),  -- hjärtsallad 2 st
(98, 358, 6,   250,  0),  -- blandade gröna bönor 250 g
(98, 359, 3,   0.5,  0),  -- sötmandel 0.5 dl
(98, 15,  17,  0.5,  0),  -- vitlöksklyftor 0.5 st
(98, 318, 1,   1,    0),  -- salt 1 tsk
(98, 319, 1,   0.5,  0),  -- svartpeppar 0.5 tsk
(98, 360, 1,   1,    0),  -- torkade franska örter 1 tsk
(98, 118, 3,   0.75, 0),  -- olivolja 0.75 dl
(98, 199, 2,   1.5,  0);  -- rödvinsvinäger 1.5 msk

-- 99: Pannkakor - grundsmet
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(99, 11,  3,  2.5, 0),  -- vetemjöl 2.5 dl
(99, 318, 1,  0.5, 0),  -- salt 0.5 tsk
(99, 31,  3,  6,   0),  -- mjölk 6 dl
(99, 40,  17, 3,   0),  -- ägg 3 st
(99, 47,  2,  2,   0);  -- smör 2 msk

-- 100: Amerikanska pannkakor
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(100, 11,  3,  2.5, 0),  -- vetemjöl 2.5 dl
(100, 361, 2,  1,   0),  -- bakpulver 1 msk
(100, 148, 2,  2,   0),  -- socker 2 msk
(100, 318, 11, 1,   0),  -- salt 1 krm
(100, 31,  3,  2.5, 0),  -- mjölk 2.5 dl
(100, 47,  2,  2,   0),  -- smör 2 msk
(100, 40,  17, 1,   0);  -- ägg 1 st

-- 101: Våfflor grundrecept
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(101, 47,  6,  100, 0),  -- smör 100 g
(101, 11,  3,  5,   0),  -- vetemjöl 5 dl
(101, 361, 1,  1.5, 0),  -- bakpulver 1.5 tsk
(101, 318, 1,  0.5, 0),  -- salt 0.5 tsk
(101, 40,  17, 2,   0),  -- ägg 2 st
(101, 31,  3,  5,   0);  -- mjölk 5 dl

-- 102: Scones
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(102, 11,  3,  4,   0),  -- vetemjöl 4 dl
(102, 361, 1,  2,   0),  -- bakpulver 2 tsk
(102, 318, 11, 2,   0),  -- salt 2 krm
(102, 47,  6,  50,  0),  -- smör 50 g
(102, 31,  3,  2,   0);  -- mjölk 2 dl

-- 103: Chokladbollar
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(103, 47,  6,  100, 0),  -- smör 100 g
(103, 148, 3,  1,   0),  -- socker 1 dl
(103, 362, 2,  1,   0),  -- vaniljsocker 1 msk
(103, 329, 2,  3,   0),  -- kakao 3 msk
(103, 308, 3,  3,   0),  -- havregryn 3 dl
(103, 363, 2,  3,   0),  -- starkt kaffe 3 msk
(103, 326, 3,  1,   0);  -- riven kokos 1 dl

-- 104: Kladdig kladdkaka
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(104, 47,  6,   100, 0),  -- smör 100 g
(104, 40,  17,  2,   0),  -- ägg 2 st
(104, 148, 3,   2.5, 0),  -- socker 2.5 dl
(104, 329, 2,   3,   0),  -- kakao 3 msk
(104, 362, 1,   2,   0),  -- vaniljsocker 2 tsk
(104, 11,  3,   1.5, 0),  -- vetemjöl 1.5 dl
(104, 318, 11,  1,   0);  -- salt 1 krm

-- 105: Toscakaka (smör/socker/mjöl/mjölk used for both batter and glaze)
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(105, 47,  6,  200, 0),  -- smör 100g batter + 100g glasyr = 200 g
(105, 40,  17, 2,   0),  -- ägg 2 st
(105, 148, 3,  2.5, 0),  -- socker 1.5 dl batter + 1 dl glasyr = 2.5 dl
(105, 11,  3,  2,   0),  -- vetemjöl 2 dl batter (glasyr uses 2 msk, negligible to add)
(105, 361, 1,  1,   0),  -- bakpulver 1 tsk
(105, 31,  2,  0.5, 0),  -- mjölk (batter 0.5 dl + glasyr 2 msk, keeping as dl)
(105, 364, 6,  100, 0);  -- skållad strimlad mandel 100 g

-- 106: Minipavlova med lemon curd
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
(106, 365, 17, 2,    0),  -- äggvita 2 st
(106, 318, 1,  0.25, 0),  -- salt 0.25 tsk
(106, 148, 3,  2.25, 0),  -- socker 1.25 dl maräng + 1 dl lemon curd = 2.25 dl
(106, 75,  2,  0.5,  0),  -- majsstärkelse 0.5 msk
(106, 362, 1,  0.5,  0),  -- vaniljsocker 0.5 tsk
(106, 279, 1,  0.5,  0),  -- vitvinsvinäger 0.5 tsk
(106, 366, 17, 1,    0),  -- äggula 1 st
(106, 40,  17, 1,    0),  -- ägg 1 st
(106, 48,  17, 1,    0),  -- citron 1 st
(106, 47,  6,  50,   0);  -- smör 50 g
