<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveAutoIncrementFromIdColumnInUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            // Remove auto-increment from the `id` column
            $table->unsignedBigInteger('id')->change();
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
            // Restore the auto-increment to the `id` column
            $table->bigIncrements('id')->change();
        });
    }
}
