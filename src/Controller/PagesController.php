<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractController
{
    #[Route(['/', '/products/{productId}'], name: 'pages_index', defaults: ['productId' => null])]
    public function index(): Response
    {
        return $this->render('pages/index.html.twig');
    }
}
