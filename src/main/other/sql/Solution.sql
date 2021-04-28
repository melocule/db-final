SELECT c.name, AVG(level) AS 'avg_level_per_character'
FROM genshin.characters c
GROUP BY c.name;

SELECT c.element, AVG(level) AS 'avg_level_per_element'
FROM genshin.characters c
GROUP BY c.element;