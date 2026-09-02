<script lang="ts">
    import OverviewContent from "../components/sections/OverviewContent.svelte";
    import {error, fail, type Actions} from "@sveltejs/kit"

    export const actions: Actions ={
      addExpense: async({request}) =>{
        const data = await request.formData();
        const title = data.get('title');
        const category =  data.get('category')
        const paymentMethod =  data.get('paymentMethod')
        const amount = data.get('amount');
        const description = data.get('description');
        const date = data.get('date');

        if(!description || !amount){
          return fail(400, {
            error: "All fields are required",
            description
          })
        }
        console.log('Saving expense:', { title, category, paymentMethod, amount: Number(amount),  date: new Date().toISOString() });
        return {success: true};
      }
    }
</script>
<div>
    <OverviewContent/>
</div>
