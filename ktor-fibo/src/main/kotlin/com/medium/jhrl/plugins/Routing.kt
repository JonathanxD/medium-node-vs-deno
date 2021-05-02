package com.medium.jhrl.plugins

import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*

fun Application.configureRouting() {

    routing {
        get("/") {
            fibonacci(40);
            call.respondText("Fibbo!")
        }
    }
}


fun fibonacci(n: Int): Int {
    return if (n == 0) 0 else if (n == 1) 1 else fibonacci(n - 1) + fibonacci(n - 2)
}