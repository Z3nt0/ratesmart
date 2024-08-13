<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveIdColumnFromUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            // Drop primary key constraint on `id` (if not already removed)
            $table->dropPrimary(['id']);

            // Now drop the `id` column
            $table->dropColumn('id');

            // Set `uuid` as the new primary key
            $table->primary('uuid');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            // Add the old `id` column back
            $table->bigIncrements('id')->first();

            // Drop the primary key on `uuid`
            $table->dropPrimary(['uuid']);
        });
    }
}
