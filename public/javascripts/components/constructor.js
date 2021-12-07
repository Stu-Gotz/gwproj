export const contactEndpoint = (tree, ending, key) => {
	const response = fetch(`https://api.guildwars2.com/v2/${tree}/${ending}?access_token=${key}`);
    const data = response.json();
    return data
};

