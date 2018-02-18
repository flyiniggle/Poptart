<template>
	<div>
		<div>
			<h4>Total accounts: </h4><span>{{ accountsCount }}</span>
		</div>
		<div>
			<h4>Recently used: </h4><span>{{ recentlyUsed }}</span>
		</div>
		<div>
			<h4>Total securities: </h4><span> {{ securitiesCount }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			accountsCount: {
				type: Number
			},
			recentlyUsed: {
				type: String
			},
			securitiesCount: {
				type: Number
			}
		}
	}
</script>