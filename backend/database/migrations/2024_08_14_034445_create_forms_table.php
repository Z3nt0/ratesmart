<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('forms', function (Blueprint $table) {
            $table->id('formid'); // Primary key
            $table->uuid('user_id'); // Foreign key to users table
            $table->string('formtitle');
            $table->text('formdescription')->nullable();
            $table->string('formimage')->nullable();
            $table->string('link')->nullable();
            $table->timestamps();

            // Define foreign key constraint (updated to reference 'user_id')
            $table->foreign('user_id')->references('user_id')->on('users'); // Establish the foreign key constraint
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('forms');
    }
};