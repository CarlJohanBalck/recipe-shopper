Add a recipe to the Docker DB image and push to DockerHub.

## How to use
Invoke with a URL: `/add-recipe https://www.ica.se/recept/some-recipe/`

## Steps

1. **Fetch the recipe** from the provided URL. Extract:
   - Name (Swedish preferred)
   - `helg`: 1 if complex/weekend dish, 0 if quick weekday meal
   - `image_url`: the main recipe image
   - Instructions: 2–4 sentence Swedish summary of the cooking steps
   - Ingredients: name (Swedish), amount, unit

2. **Check the DB** for the next available IDs and existing ingredients:
   ```bash
   docker exec recipe-shopper-db-1 mysql -uroot -proot cool_db -e \
     "SELECT MAX(id) FROM recipe; SELECT MAX(id) FROM ingredient; SELECT id, name FROM ingredient ORDER BY name;"
   ```

3. **Map ingredients** to existing ingredient IDs where possible. Only create new ingredient rows for ingredients that don't already exist.

   Unit IDs:
   | ID | Unit | ID | Unit |
   |----|------|----|------|
   | 1  | tsk  | 11 | krm  |
   | 2  | msk  | 12 | näve |
   | 3  | dl   | 13 | förp |
   | 4  | l    | 14 | burk |
   | 6  | g    | 15 | kruka|
   | 7  | kg   | 17 | st   |
   | 9  | bitar| 21 | påse |

4. **Insert** into the running container:
   ```sql
   -- Only if new ingredients are needed:
   INSERT INTO ingredient (id, name, category_id) VALUES (...);

   INSERT INTO recipe (id, name, url, helg, image_url, instructions) VALUES (...);

   INSERT INTO recipe_ingredient (recipe_id, ingredient_id, unit_id, amount, price) VALUES
   (..., 0),  -- ingredient name amount unit
   ...;
   ```
   Run via:
   ```bash
   docker exec -i recipe-shopper-db-1 mysql -uroot -proot cool_db < your_file.sql
   ```

5. **Commit and push** to DockerHub:
   ```bash
   docker commit recipe-shopper-db-1 carl0222/recipes_database_arm
   docker push carl0222/recipes_database_arm
   ```

## Notes
- DB name: `cool_db`, container: `recipe-shopper-db-1`
- DockerHub image: `carl0222/recipes_database_arm`
- `category_id = 1` for vegetables/fresh produce, `NULL` for everything else
- Combine duplicate ingredient entries (e.g. salt used in multiple components) into one row with the total amount
- `price` is always `0`
